// The http.createServer() method includes request and response parameters which 
// is supplied by Nodejs

// The request object can be used to get information about the current HTTP request.
// eg. url, request header and data

// The response object can be used to send a response for a current HTTP request.

//  If a response from the HTTP server is supposed to be display as HTML,
// you should include an HTTP header with the correct content type.

const http = require('http')
const fs = require('fs')
const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8")
const server = http.createServer((req, res) => {
    // console.log(req.url)

    if (req.url == "/") {
        res.end("Hello from the home")
    }
    else if (req.url == "/about") {
        res.end("Hello from the about side")
    }
    else if (req.url == "/contact") {
        res.write("Hello from the contact side")
        res.end()
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, {"content-type": "application/json"})
        res.end(data)
    }
    else {
        // console.log("Error 404")
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1>404</h1>");
    }
    // res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to the Port : 8000")
})
