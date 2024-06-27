// This program manipulates an array of locations in various ways to demonstrate array operations in TypeScript.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Initial list of locations
var locations = ["Tokyo", "New York", "Paris", "Sydney", "Cape Town"];
// Print the array in its original order
console.log("Original order:");
console.log(locations);
// Print the array in alphabetical order without modifying the actual list
var sortedLocations = __spreadArray([], locations, true).sort();
console.log("\nAlphabetical order (without modifying the original list):");
console.log(sortedLocations);
// Show that the array is still in its original order by printing it
console.log("\nOriginal order (after sorting attempt):");
console.log(locations);
// Print the array in reverse alphabetical order without changing the order of the original list
var reverseSortedLocations = __spreadArray([], locations, true).sort().reverse();
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
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nOrder after sorting the list in reverse alphabetical order:");
console.log(locations);
