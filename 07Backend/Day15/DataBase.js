const mongoose = require('mongoose');

async function main() {
    mongoose.connect("mongodb+srv://mostakin:Mostakin1%40@mongolern.f13vcoz.mongodb.net/myAppDB");

    // Model ko create === collection create karna (Table ko craete karna)
    // const user = mongoose.model("user", userSchema);

    // create document or object
    // 1st method

    // const user1 = new user({ name: "Rohit", age: 20, city: "kolkata", gender: "Male" });
    // await user1.save();


    //  2nd method

    // await user.create({ name: "Mohon", age: 22, city: "delhi", gender: "Male" });

    // await user.insertMany([
    //     { name: "Suraiya", age: 15, city: "Atghara", gender: "Female" },
    //     { name: "empty", age: 16, city: "empty", gender: "Unknown" }
    // ]);
}

module.exports = main;
