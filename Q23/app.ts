// This program performs a series of conditional tests and prints the results along with predictions.

let car = 'subaru';
let age = 25;
let city = 'New York';
let isStudent = true;
let price = 19.99;

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("\nIs car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("\nIs age > 20? I predict True.");
console.log(age > 20); // True

console.log("\nIs age < 20? I predict False.");
console.log(age < 20); // False

console.log("\nIs city == 'New York'? I predict True.");
console.log(city == 'New York'); // True

console.log("\nIs city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False

console.log("\nIs isStudent == true? I predict True.");
console.log(isStudent == true); // True

console.log("\nIs isStudent == false? I predict False.");
console.log(isStudent == true); // False

console.log("\nIs price == 19.99? I predict True.");
console.log(price == 19.99); // True

console.log("\nIs price == 20.00? I predict False.");
console.log(price == 20.00); // False

console.log("\nIs price > 10? I predict True.");
console.log(price > 10); // True

console.log("\nIs price < 10? I predict False.");
console.log(price < 10); // False

console.log("\nIs city.toLowerCase() == 'new york'? I predict False.");
console.log(city.toLowerCase() == 'new york'); // False

console.log("\nIs car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // True