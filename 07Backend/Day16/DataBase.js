const mongoose = require('mongoose');
const user = require('./Models/users');

async function main() {
    mongoose.connect("mongodb+srv://mostakin:Mostakin1%40@mongolern.f13vcoz.mongodb.net/instagram");

    // await user.insertMany([
    //     {
    //         name: {
    //             first: "Alice",
    //             last: "Johnson"
    //         },
    //         dob: {
    //             day: 15,
    //             month: 5,
    //             year: 1995
    //         },
    //         password: "alice123"
    //     },
    //     {
    //         name: {
    //             first: "Bob",
    //             last: "Smith"
    //         },
    //         dob: {
    //             day: 22,
    //             month: 8,
    //             year: 1990
    //         },
    //         password: "bobpass456"
    //     },
    //     {
    //         name: {
    //             first: "Charlie",
    //             last: "Brown"
    //         },
    //         dob: {
    //             day: 3,
    //             month: 12,
    //             year: 1988
    //         },
    //         password: "charliepwd789"
    //     },
    //     {
    //         name: {
    //             first: "Diana",
    //             last: "Evans"
    //         },
    //         dob: {
    //             day: 10,
    //             month: 2,
    //             year: 1997
    //         },
    //         password: "diana_secure"
    //     },
    //     {
    //         name: {
    //             first: "Ethan",
    //             last: "Wright"
    //         },
    //         dob: {
    //             day: 29,
    //             month: 9,
    //             year: 1992
    //         },
    //         password: "ethan_2025"
    //     }
    // ]);



}

module.exports = main;