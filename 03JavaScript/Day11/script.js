let obj1 = {
    a:1,
    b:2
}

let obj2 = obj1;
// shallow copy
obj2.a=10;
// console.log(obj2, obj1);

// //  deep copy 
let obj3 = structuredClone(obj1);
obj3.a = 20;
// console.log(obj3, obj1);


//  Nested object
const user = {
    name:"Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
}

// console.log(user.address.pincode);
// //  structureclone

const user2 = Object.assign({},user);
// console.log(user2);
user2.address.pincode = 321314;
// console.log(user.address.pincode);

//  Destructruing of an object
let obj = {
    name: "Rohit",
    money: 430,
    balance: 30,
    age: 20,
    aadhar: "hfdsiohsai"
};

// const {name, balance, age} = obj;
// const {name:full_name , balance: amount, age:Umar} = obj;
// const {name, age,...obj1} = obj;
// console.log(obj1);

const arr = [3,2,1,5,10];
const [a,b] = arr;
const [c,d, ,e] = arr;
const [first,second,...third] = arr;
// console.log(third);



let obj5 = {
        name: "Rohit",
        age: 20,
        arr: [90,40,60,80],
        address: {
            pincode:246149,
            city:"Kotdwar",
            state: "uk"
        }
};

const {address:{pincode,city}} = obj5;
const {arr: [h]} = obj5;
// console.log(pincode,city);

let user3 = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        console.log("Hello COder Army");
    },
    meet: function(){
        return 20;
    }
}

// console.log(user3.greet());
// console.log(user.meet());

let obj10 = {
    name:"Rohit",
    amount:420,
    greet: function(){
        return 10;
    }
}


// console.log(obj10.toString())
// arr is an object
let arr1 = [2,3,1,8];
arr.push(10);





