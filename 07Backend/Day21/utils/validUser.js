const validator = require('validator')
const user = require("../Models/userSchema");

async function validUser(data){
    const mandatoryField = ["name","age","mail","password"];
    const dataKey = Object.keys(data)
    const existingUser = await user.findOne({mail:data.mail})
    const IsAllowed = mandatoryField.every(key=> dataKey.includes(key));

    if(existingUser)
        throw new Error("user Exist")
    if(!validator.isEmail(data.mail))
        throw new Error("Invalid Email");

    if(!validator.isStrongPassword(data.password))
        throw new Error("week password");

    if(!IsAllowed) 
        throw new Error("Field missing")
}

module.exports = validUser;