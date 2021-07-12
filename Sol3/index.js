const http = require("http")
const url = require("url");


const server = http.createServer((req,res) =>{
    res.writeHead(200,{"Contend-type" : "text/html"});

    const rad = url.parse(req.url,true).query;
    const radius =rad.radius;
    console.log(radius);
    const area = 3.14*radius*radius;

    const msg = "The" + " " + rad.metric + " " + rad.object +  " is"  + area ;
    res.end(msg);
});

server.listen(8080,"127.0.0.1",() =>{
    console.log("Listening to port number 8080")
})
