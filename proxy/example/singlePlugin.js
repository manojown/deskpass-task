const http = require('http');
const createdProxy = require('../lib')
const { env } = require('./config')


// Block the IP plugin
function ipBlock(req,res){
    // yout logic here
    console.log("ipBlock")
    throw new Error("not authorized")

}



// Proxy server
async function onRequest(req, res) {
    // Redirection options
    const options = {
        hostname: env.HOSTNAME,
        port: env.PORT
    }

    const proxy = createdProxy(req, res, options)
    // to register your function with before hook
    proxy.before(ipBlock);
    proxy.run()

    proxy.on('error', function(err){
        console.log("Error event trigger",err)
    })
  
}




http.createServer(onRequest).listen(5000);
