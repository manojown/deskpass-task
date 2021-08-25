const http = require('http');
const createdProxy = require('../lib')
const {env} = require('./config')



// Loging the response, here i'm not use body parser to parse manually 
function logging(response){
    console.log("response",response)
}
 

// Proxy server
async function onRequest(req, res) {
    const options = {
        hostname: env.HOSTNAME,
        port: env.PORT
    }

    const proxy = createdProxy(req, res, options)
    // Middleware plugin example
    proxy.after([logging]);
    proxy.run()

    proxy.on('error', function(err){
        console.log("in ecent",err)
    })
  
}


http.createServer(onRequest).listen(5000);
