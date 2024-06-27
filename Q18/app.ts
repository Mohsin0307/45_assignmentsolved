// This program manipulates an array of locations in various ways to demonstrate array operations in TypeScript.

// Initial list of locations
let locations: string[] = ["Tokyo", "New York", "Paris", "Sydney", "Cape Town"];

// Print the array in its original order
console.log("Original order:");
console.log(locations);

// Print the array in alphabetical order without modifying the actual list
let sortedLocations: string[] = [...locations].sort();
console.log("\nAlphabetical order (without modifying the original list):");
console.log(sortedLocations);

// Show that the array is still in its original order by printing it
console.log("\nOriginal order (after sorting attempt):");
console.log(locations);

// Print the array in reverse alphabetical order without changing the order of the original list
let reverseSortedLocations: string[] = [...locations].sort().reverse();
console.log("\nReverse alphabetical order (without modifying the original list):");
console.log(reverseSortedLocations);

// Show that the array is still in its original order by printing it again
console.log("\nOriginal order (after reverse sorting attempt):");
console.log(locations);

// Reverse the order of the list and print the array to show that its order has changed
locations.reverse();
console.log("\nOrder after reversing the list:");
console.log(locations);

// Reverse the order of the list again and print the list to show it's back to its original order
locations.reverse();
console.log("\nOrder after reversing the list again:");
console.log(locations);

// Sort the array so it's stored in alphabetical order and print the array to show its order has changed
locations.sort();
console.log("\nOrder after sorting the list alphabetically:");
console.log(locations);

// Sort to change the array so it's stored in reverse alphabetical order and print the list to show its order has changed
locations.sort((a, b) => b.localeCompare(a));
console.log("\nOrder after sorting the list in reverse alphabetical order:");
console.log(locations);