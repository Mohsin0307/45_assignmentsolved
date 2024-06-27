// This program performs a variety of conditional tests and prints the results along with predictions.

let car = 'subaru';
let age = 25;
let city = 'New York';
let isStudent = true;
let price = 19.99;
let fruits = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

console.log("\nIs car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True

// Tests using the lower case function
console.log("\nIs city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

console.log("Is city.toLowerCase() == 'los angeles'? I predict False.");
console.log(city.toLowerCase() == 'los angeles'); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nIs age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is age != 25? I predict False.");
console.log(age != 25); // False

console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True

console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True

console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False

// Tests using "and" and "or" operators
console.log("\nIs age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // True

console.log("Is age < 20 || age > 30? I predict False.");
console.log(age < 20 || age > 30); // False

console.log("Is car == 'subaru' && isStudent == true? I predict True.");
console.log(car == 'subaru' && isStudent == true); // True

console.log("Is car == 'subaru' || isStudent == false? I predict True.");
console.log(car == 'subaru' || isStudent == true); // True

console.log("Is car == 'toyota' && isStudent == true? I predict False.");
console.log(car == 'toyota' && isStudent == true); // False

console.log("Is car == 'toyota' || isStudent == false? I predict False.");
console.log(car == 'toyota' || isStudent == true); // False

// Test whether an item is in an array
console.log("\nIs 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // True

console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes('mango')); // False

// Test whether an item is not in an array
console.log("\nIs 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango')); // True

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple')); // False