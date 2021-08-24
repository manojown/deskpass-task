const http = require('http');
const createdProxy = require('../lib')

// Block the IP
function ipBlock(req,res){
    console.log("ipBlock",res.body)
    throw new Error("not authorized")

}

async function onRequest(req, res) {
    const options = {
        hostname: 'localhost',
        port: 3000
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
