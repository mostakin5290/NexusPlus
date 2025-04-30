const express = require('express');
const app = express();
const user = require('./Models/user');
const main = require('./dataBase')

app.use(express.json());

// Post Opration
app.post("/user",async (req,res)=>{
    try{
        const mandatoryField = ["name","age","mail"];
        const isAllow = mandatoryField.every((k)=>Object.keys(req.body).includes(k));
        if(!isAllow)throw new Error("Field Missing");
        await user.create(req.body);
        res.send("done");
    }
    catch(err){
        res.status(500).send(err.massage);
    }
})

// Get Opration

app.get("/user",async(req,res)=>{
    try{
        res.send(await user.find({}));
    }

    catch(err){
        res.status(500).send(err);
    }
})

// Patch Opration

app.patch('/user',async(req,res)=>{
    try{
        const {_id, ...update} = req.body;

        await user.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update Succesfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
});

// delete Opration

app.delete("user/:id",async(req,res)=>{
    await user.deleteOne(req.params.id);
    res.send("delete done");
})


main()
    .then(()=>{
        console.log("cunnected to database ")
        app.listen(3000,()=>{
            console.log("lisiling at port 3000");
        })
    })
    .catch((err)=>{console.log(err)});

