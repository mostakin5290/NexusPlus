const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db');
const Chat = require('./Models/chat');
const main = require("./aiModel");

const app = express();
app.use(express.json());

connectDB();

const chattingHistory = {};



app.post("/model", async (req, res) => {
    const { id, msg } = req.body;

    if (!chattingHistory[id]) {
        chattingHistory[id] = []
    }

    const History = chattingHistory[id];

    const promptmessage = [...History, {
        role: 'user',
        parts: [{ text: msg }]
    }]

    const ans = await main(promptmessage);

    History.push({ role: 'user', parts: [{ text: msg }] })
    History.push({ role: 'model', parts: [{ text: ans }] })

    await Chat.create({ userID: id, role: 'user', text: msg });
    await Chat.create({ userID: id, role: 'model', text: ans });

    res.send(ans);
})

app.listen(3000, () => {
    console.log("port start at 3000");
})