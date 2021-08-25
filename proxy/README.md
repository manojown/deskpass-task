## Proxy Server
## All the hostname and port option you can set in config.js file which available in the example folder
## What I'm trying to do
   Here I'm only trying to explain how we can configure plugin support and proxy can be configured with life cycle methods, so there is not handle all the cases like SSL, HTTP, HTTPS, HTTP-to-HTTPS.
   this needs extra work to configure the HTTP, HTTPS package, and SSL handing.
### life cycle methods
    *   Before 
            To run any method before sending the request to origin params required - request, response.
            if any error occurs during the execution handler end the response and send it back to the client.
            if you throw the error with the message then that immediately passes to the client and end the request cycle
    *   After
            To run any method after getting the response from the origin
            The operation can be - logging the response, edit the response header, etc.
            params - response.
            if any error occurs during the execution handler end the response and send it back to the client.
            if you throw the error with the message then that immediately passes to the client and end the request cycle
    *   Run 
            Traditional Run method to start the proxy.

## There are many ways to provide plugin support
    1. via middleware support - connect 
    2. Event emitter - added event emitter support in future if need to add any event, for now just added error event to handle the error on proxy