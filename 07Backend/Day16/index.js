const express = require('express')
const app = express();
const user = require('./Models/users');
const main = require('./DataBase');


app.use(express.json());


app.get("/user", async (req, res) => {
    try {
        res.send(await user.find({}));
    }
    catch (error) {
        res.status(500).send(error);
    }
});

app.post("/user", async (req, res) => {
    try {
        await user.create(req.body);
        res.send("done");
    }
    catch (error) {
        res.status(500).send(error);
    }
})

app.delete("/user/:id", async (req, res) => {
    try {
        const result = await user.deleteOne({ _id: req.params.id });
        // if (result.deletedCount === 0) {
        //     res.status(404).send("User not found");
        // } else {
        //     res.send("User deleted successfully");
        // }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.put("/user/:id",async (req,res)=>{
    try{
        const result = await user.updateOne({_id: req.params.id},{name:{first:"Mostakin"}});
        res.send("done");
    }
    catch(err){
        res.status(500).send(err.message);
    }
})





main()
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("at port 3000");
        })
    })
    .catch((error) => { console.log(error) });





