const express = require('express');
const app = express();
const main = require('./dataBase');
const user = require("./Models/userSchema");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const validateuser = require('./utils/validUser');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');


app.use(express.json());
app.use(cookieParser());

app.use("/",authRouter)
app.use("/",userRouter)



main()
.then(()=>{
    console.log('connectrd to databse');
    app.listen(3000,()=>{
        console.log("start at port 3000")
    })
})
.catch((err)=>console.log(err));