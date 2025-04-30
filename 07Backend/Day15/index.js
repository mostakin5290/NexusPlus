const express = require('express');
const app = express();
const main = require("./DataBase")

const User=require("./Models/users")

app.use(express.json());

app.get("/info",async(req,res)=>{
    const ans = await User.find({})
    res.send(ans);
})

// CRUD : Create Read Upadte Delete

app.post("/info",async(req,res)=>{
    // method 1 
    // const ans = new User(req.body);
    // await ans.save();

    // Method 2
    try{
        await User.create(req.body);
        res.send("Successfully Updated");
    }
    catch(err){
        res.status(500).send(err);
    }
})


app.delete("/info", async (req,res)=>{
    await User.deleteOne({name:"Rahul"});
    res.send("Deleted");
})

app.put("/info",async (req,res)=>{
    const result = await User.updateOne({name:"Mohon"},{age:40});
    res.send("Update Succesfully");
})



main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
    })

    // const result = await User.find({name:"Rohit"});
    // console.log(result);
})
.catch((err)=>console.log(err));
