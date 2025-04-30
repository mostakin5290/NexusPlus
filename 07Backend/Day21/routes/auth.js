const express = require('express');
const authRouter = express.Router();
const user = require('../Models/userSchema');
const bcrypt = require("bcrypt");
// const validUser = require('../utils/validUser')
const validateUser = require('../utils/validUser');





// register
authRouter.post("/register", async (req, res) => {
    try {
        // Validate input
        validateUser(req.body);

        // Hash password
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Create user
        await user.create(req.body);

        res.send("User Registered Successfully");
    } catch (err) {
        res.status(400).send(err.message || "Registration failed");
    }
});




// login
authRouter.post("/login", async (req, res) => {
    try {
        // 1. Find user by email
        const person = await user.findOne({ mail: req.body.mail });

        // 2. If user not found
        if (!person) throw new Error("Invalid login");

        // 3. Compare passwords
        const isMatch = await bcrypt.compare(req.body.password, person.password);
        if (!isMatch) throw new Error("Invalid login");

        // // JWT token
        const token = person.getJWT();

        res.cookie("token",token);

        // 4. Success
        res.send("Login done");
    } catch (err) {
        res.status(400).send(err.message); // 400 for bad login
    }
});


module.exports = authRouter;
