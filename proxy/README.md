## Proxy Server
## What i'm trying to do
   Here i'm only trying to explaining how we can configure plugin support and proxy can be configured with life cycle methods, so there is not handle all the cases like ssl, http, https , http-to-https.
   this need another extra work to confgire http https package and ssl handing.
### life cycle methods
    *   Before 
            To run any method before seding the request to origin 
            params - request, response.
            if any error occurs during execution handler end the response and send back to client.
            if you throw the error with message than that immidiatle passes to client and end the request cycle
    *   After
            To run any method after getting the response from origin
            Opeartion can be - loggin the response, edit the response header etc.
            params - response.
            if any error occurs during execution handler end the response and send back to client.
            if you throw the error with message than that immidiatle passes to client and end the request cycle
    *   Run 
            Traditional Run method to start proxy.

## There is many way to provide plugin support
    1. via middleware support - connect 
    2. Event emitter - added event emitter support in future if need to add any event, for now just added error event to handle the error on proxy