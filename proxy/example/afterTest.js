const http = require('http');
const createdProxy = require('../lib')



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
    });
}

// Loging the response, here i'm not use body parser to parse manually 
function logging(response){
    console.log("response",response.data)
}


// Proxy server
async function onRequest(req, res) {
    const options = {
        hostname: 'localhost',
        port: 3000
    }

    const proxy = createdProxy(req, res, options)
    // Middleware plugin example
    proxy.after([responseParser,logging]);
    proxy.run()

    proxy.on('error', function(err){
        console.log("in ecent",err)
    })
  
}


http.createServer(onRequest).listen(5000);
