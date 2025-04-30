const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    firstName:{
        type:String,
        require:true,
        minLength:3,
        maxLength:30
    },
    lastNmae:{
        type:String,
        require:false,
        minLength:2,
        maxLength:20
    },
    emailid:{
        type:String,
        trim:true,
        require:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true
    },
    age:{
        type:Number,
        require:true,
        min:6,
        max:80
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    problemSolv:{
        type:[Stirng]
    }
},{timestamps:true});

const user= mongoose.model('user',userSchema);
module.exports = user