const http = require('http');
const createdProxy = require('../lib')
const { env } = require('./config')

// Block the IP
function ipBlock(req,res){
  // to get body need to add bodyparser as a plugin
    console.log("ipBlock",req.body)
    throw new Error("not authorized")

}

async function onRequest(req, res) {
    const options = {
        hostname: env.HOSTNAME,
        port: env.PORT
    }
    const proxy = createdProxy(req, res, options)

    proxy.before([bodyParser,ipBlock]);
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
