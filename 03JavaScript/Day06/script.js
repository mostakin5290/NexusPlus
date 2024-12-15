// Primitive data type 

const num = 10;
// num = 20;
console.log(num);

// Non primitive data type

const obj = {
    id:10,
    name:"Mostakin"
}

obj.id = 11;
console.log(obj);


// String

let str1 = "Hello Coder Army";
let str2 = 'Hello Coder Army';
let str3 = `Hello Coder Army`;
console.log(str1, str2, str3);

let price = 80;
console.log(`Price of the tomato ${price}`);

// String concatenation
let s1 = "Hello";
let s2 = " Coder Army";
console.log(s1+s2);
console.log((s1+s2).length);

// changing Case
let st = "I am hero";
console.log(st.toUpperCase());
console.log(st.toLowerCase());

// Searching in String
let hero = "Hello Coder Army";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.includes("Coder"));

// Extracting Substrings

let newString ="helloDon";
console.log(newString.slice(0,3));
// Slice can take negative index but substring not .
console.log(newString.substring(0,3));
console.log(newString.substr(0,3));

// Replacing Content 
let str10 = "Hello Ji kaise ho";
console.log(str10.replace("Ji","Money"));
console.log(str10.replaceAll("Ji","Money"));

// Splitting String  
let str11 = "Money!Honey!Sunny!Funny";
console.log(str11.split("!"));


// Trimming
let str12 = "  hello ji ";
console.log(str12);
console.log(str12.trim());


// new way to create string 
let nweWay = new String("Hello Coder Army");
console.log(nweWay);
