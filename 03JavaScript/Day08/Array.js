const arr = [23,43,42,"Mostakin",45,463];
console.log(arr);
// length of array
console.log(`length of the array is: ${arr.length}`);

// Add element in the end
arr.push(50);
console.log(arr);

// remove element on end 
arr.pop();
console.log(arr);

// add element in begin
arr.unshift(1);
console.log(arr);

// remove at begin
arr.shift();
console.log(arr);

console.log(arr.indexOf(42));
console.log(arr.includes(1));

