const express = require("express");
const app = express();

app.use(express.json());
const temp =[];

app.get('/user', (req, res) => {
    res.send(temp);
});

app.post("/user",(req,res)=>{
    console.log(req.body)
    temp.push(req.body);
    res.send("sslogs");
})




app.listen(3000, () => {

})
