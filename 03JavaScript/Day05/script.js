// Example: Primitive Data Type (Number)
let a = 10;  // Assigning a number to variable 'a'
let b = a;   // Assigning the value of 'a' to 'b'

b = 30;       // Changing the value of 'b'
console.log(b);  // Logs 30 (since b is now 30)
console.log(a);  // Logs 10 (a remains unchanged because primitive data types are immutable)


// **Primitive vs Non-Primitive Data Types**

/*
Primitive data types in JavaScript include:
- Number
- String
- Boolean
- null
- undefined
- Symbol
- BigInt

Characteristics of primitive types:
- **Immutable**: Once assigned, the value of a primitive type cannot be changed.
- When assigned to another variable, a **copy** of the value is made.

Non-Primitive data types in JavaScript include:
- Object
- Array
- Function

Characteristics of non-primitive types:
- **Mutable**: The values of non-primitive types can be modified after assignment.
- When assigned to another variable, it does not create a copy but a **reference** to the original value.
*/

// Example of Non-Primitive Data Type (Object)
let obj1 = { 
    id: 20, 
    name: "Mostakin" 
};

// Assigning obj1 to obj2, both refer to the same object in memory
let obj2 = obj1;

// Modifying the object through obj2
obj2.id = 30;

// Both obj1 and obj2 reflect the change, as they point to the same object
console.log(obj1);  // Logs { id: 30, name: "Mostakin" }
console.log(obj2);  // Logs { id: 30, name: "Mostakin" }
