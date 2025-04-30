const express = require('express')
const userRouter = express.Router();
const user = require('../Models/userSchema');

// post
userRouter.post("/user",async(req,res)=>{
    try{
        await validateuser(req.body);
        // bcrypt
        req.body.password = await bcrypt.hash(req.body.password,10);

        await user.create(req.body)
        res.send("add done");
    }
    catch(err){
        res.status(400).send(err.message);
    }
})
// get
userRouter.get('/user',async(req,res)=>{
    try{
        res.send(await user.find({}));
    }
    catch(err){
        res.status(500).res.send(err.message);
    }
})

// patch
userRouter.patch('/user',async(req,res)=>{
    try{
        const [_id, ...update] = req.body;

        await user.findByIdAndUpdate(_id,update);
        res.send("Update done");
    }
    catch(err){
        res.status(500).req.send(err.message)
    }
})

// delete
userRouter.delete('/user',async(req,res)=>{
    try{
        await user.deleteOne(req.body);
        res.send("delete done");
    }
    catch(err){
        res.status(500).req.send(err.message)
    }
})

module.exports = userRouter;