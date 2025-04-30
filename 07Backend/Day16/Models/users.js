const { Schema, default: mongoose } = require('mongoose');


const userSchema = new Schema({
    name: {
        type:String,
        first:{
            type:String,
            required:true,
            trim:true,
            uppercase:true,
            unique:true,
            minlength:3,
            maxlength:30,


        },
        last: {
            type:String,
            trim:true,
            uppercase:true,
            minlength:3,
            maxlength:10,
        }
    },

    dob:{
        day:{
            type:Number,
            min:1,
            max:2,
        },
        month:{
            type:Number,
            min:1,
            max:2,
        },
        year:{
            type:Number,
            min:2,
            max:4,
        }
    },
    password:{
        type:String,
        minlength:8,
        maxlength:30,
    }
})

const user = mongoose.model("user",userSchema);

module.exports = user;