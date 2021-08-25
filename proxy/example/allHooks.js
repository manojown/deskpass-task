const http = require('http');
const createdProxy = require('../lib')
const { env } = require('./config')

// Block the IP
function ipBlock(req,res){
    console.log("ipBlock")
    throw new Error("not authorized")

}


// Loging the response, here i'm not use body parser to parse manually 
function responseParser(response){
    var data = [];
    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      data.push(chunk);
    });
    //the whole response has been received, so we just print it out here
    response.on('end', function () {
        var buffer = Buffer.concat(data);
        response.data = buffer.toString('utf8')
        console.log("response.data",response.data)
    });
}

// Loging the response, here i'm not use body parser to parse manually 
function logging(response){
    console.log("response",response.data)
}


// Proxy server
async function onRequest(req, res) {
     const options = {
        hostname: env.HOSTNAME,
        port: env.PORT
    }
    const proxy = createdProxy(req, res, options)

    // to register your function with before  and after hook
    proxy.before([bodyParser,ipBlock]);
    proxy.after([responseParser,logging]);
    proxy.run()




    proxy.on('error', function(err){
        console.log("in ecent",err)
    })
  
}



// A function instead of bodyParser
function bodyParser(req,res){
    return new Promise((resolve,reject) => {
        var data = '';
        req.on('data', function( chunk ) {
          data += chunk;
        });
        req.on('end', function() {
          req.rawBody = data;
          if (data && data.indexOf('{') > -1 ) {       
            req.body = JSON.parse(data);
          }
          resolve(data)
        });
    })
}


http.createServer(onRequest).listen(5000);
