const http = require("http")
const url = require("url");


const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type' : "text/html"});

    const today = url.parse(req.url,true).query;
    const birthYear = today.year;
    console.log(birthYear)
    const d = new Date();
    var currentYear = d.getFullYear();
    console.log(currentYear)

    const age=  currentYear -birthYear;
    const msg ="Hello" + " " + today.name + "\currentYear" + " you are currently"+ " " +age + "year old";

    res.end(msg)
});

server.listen(8080,"127.0.0.1",() =>{
    console.log("Listening to port number 8080")
})




