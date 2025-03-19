const http = require("http");

http.createServer((req,res)=>{
    res.end("kngiw");
    console.log(req.headers.host);
}).listen(4000,()=>{
    console.log("i am lessling 4000 port");
});

