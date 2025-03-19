const express = require("express");
const app = express();
const books = [
    { id: 1, name: "One", price: 100 },
    { id: 2, name: "Two", price: 200 },
    { id: 3, name: "Three", price: 800 },
    { id: 4, name: "Four", price: 1000 }
];
app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(books);
});

app.post("/book",(req,res)=>{
    books.push(req.body);
    res.send("post done");
});

app.put("/book",(req,res)=>{
    const indx = books.find(book=>book.id===req.body.id);
    indx.name = req.body.name;
    indx.price = req.body.price;
    res.json({massage:"Book Updated:",
            "update":{...books[req.body.id-1]}});
});



app.delete("/book",(req,res)=>{
    res.send("delete request");
});


app.listen("2000",()=>{});