const fs = require('fs');
const http = require('http');

// Creating a Serve
const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end("Hello to Home page")
    }else if(req.url =="/vegetable"){
        fs.readFile("vege.json", "utf-8", (err,data) =>{
            console.log(data);
            res.end(data);
        } );
    }
});
// listening to server
server.listen(8080,"127.0.0.1",() =>{
    console.log("Listening to port number 8080")
})


 