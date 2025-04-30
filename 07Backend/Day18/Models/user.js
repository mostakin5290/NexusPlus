const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    age: {
        type: Number,
        min:16,
        max:70,
        require:true
    },
    gender: {
        type: String,
        enum:["male","femail","others"],
        trim:true
    },
    mail: {
        type: String,
        immutable: true,
        trim:true,

    },
    password: {
        type: String,
        require:true,
        minlength:8,
        maxlength:30,
        trim:true,
    },
    img: {
        type: String,
        default: "this is defult img"
    }
});

const user = mongoose.model("users", userSchema);

module.exports = user;