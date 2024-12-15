let a=10;
let b=a;
b=30;
console.log(b);
console.log(a);
// primitive data type vs Non Primitive data type 
// primitive data type: Immutable 
// Non Primitive data type: Mutable 

// Object example

let obj1={
    id:20,
    name:"Mostakin",
    
}

let obj2 = obj1;
obj2.id = 30;
console.log(obj1);
console.log(obj2)  