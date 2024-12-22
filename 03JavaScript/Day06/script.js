// Primitive Data Type Example

const num = 10;  // A primitive number type is assigned
// num = 20;   // Uncommenting this line will cause an error because 'num' is a constant
console.log(num);  // Logs: 10

// Non-Primitive Data Type Example (Object)
const obj = {  // Objects are non-primitive data types and are mutable
    id: 10,
    name: "Mostakin"
};

// You can modify the properties of an object, even if it's declared as a constant
obj.id = 11;
console.log(obj);  // Logs: { id: 11, name: "Mostakin" }


// String Manipulations in JavaScript

// Declaring strings with different quotes
let str1 = "Hello Coder Army";  // Double quotes
let str2 = 'Hello Coder Army';  // Single quotes
let str3 = `Hello Coder Army`;  // Template literals (backticks)
console.log(str1, str2, str3);  // Logs all three strings

// Using template literals for dynamic string creation
let price = 80;
console.log(`Price of the tomato: ${price}`);  // Logs: Price of the tomato: 80

// String concatenation: Combining two strings
let s1 = "Hello";
let s2 = " Coder Army";
console.log(s1 + s2);  // Logs: Hello Coder Army

// String length
console.log((s1 + s2).length);  // Logs: 17 (length of concatenated string)

// Changing case of the string
let st = "I am hero";
console.log(st.toUpperCase());  // Logs: I AM HERO (converts to uppercase)
console.log(st.toLowerCase());  // Logs: i am hero (converts to lowercase)

// Searching within a string
let hero = "Hello Coder Army";
console.log(hero.indexOf("Coder"));  // Logs: 6 (position of first occurrence of "Coder")
console.log(hero.lastIndexOf("Coder"));  // Logs: 6 (position of last occurrence of "Coder")
console.log(hero.includes("Coder"));  // Logs: true (checks if "Coder" is present)

// Extracting substrings from a string
let newString = "helloDon";
console.log(newString.slice(0, 3));  // Logs: hel (extracts characters from index 0 to 3)
console.log(newString.substring(0, 3));  // Logs: hel (same as slice)
console.log(newString.substr(0, 3));  // Logs: hel (extracts 3 characters starting from index 0)

// Replacing content in a string
let str10 = "Hello Ji kaise ho";
console.log(str10.replace("Ji", "Money"));  // Logs: Hello Money kaise ho (replaces first occurrence)
console.log(str10.replaceAll("Ji", "Money"));  // Logs: Hello Money kaise ho (replaces all occurrences)

// Splitting a string into an array
let str11 = "Money!Honey!Sunny!Funny";
console.log(str11.split("!"));  // Logs: [ 'Money', 'Honey', 'Sunny', 'Funny' ] (splits by "!" character)

// Trimming whitespace from a string
let str12 = "  hello ji ";
console.log(str12);  // Logs: "  hello ji "
console.log(str12.trim());  // Logs: "hello ji" (removes leading and trailing spaces)

// Creating a string using the String constructor
let nweWay = new String("Hello Coder Army");
console.log(nweWay);  // Logs: [String: 'Hello Coder Army'] (this is an object, not a primitive string)
