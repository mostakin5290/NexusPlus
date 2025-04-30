// models/Chat.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: String,
    role: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', messageSchema);
