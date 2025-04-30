const express = require('express');
const main = require('./db');
const app = express();
const cookieParser = require('cookie-parser')
require('dotenv').config();


app.use(express.json());
app.use(cookieParser())


main()
    .then(()=>{
        console.log('connectrd to databse');
        app.listen(process.env.PORT,()=>{
            console.log("start at port "+process.env.PORT)
    })
})
    .catch((err)=>console.log(err));