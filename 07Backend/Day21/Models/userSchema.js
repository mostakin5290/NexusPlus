const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    age: {
        type: Number,
        min: 16,
        max: 70
    },
    mail: {
        type: String,
        trim: true,
        minlength: 10,
        lowercase: true,
    },
    password: {
        type: String,
        minlength: 8
    }

}, { Timestamp: true })



userSchema.methods.getJWT = function () {
    const ans = jwt.sign({ _id: this._id, emailId: this.emailId }, 'Mostakin1@', { expiresIn: 1800 });
    return ans;
}

userSchema.methods.verifyPassword = async function (Userpassword) {
    const ans = await bcrypt.compare(Userpassword, this.password);
    return ans;
}

const user = mongoose.model('user', userSchema);
module.exports = user;