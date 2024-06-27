var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function that adds "the Great" to each magician's name in a copy of the array
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}
// Function that prints the names of magicians in the array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Original array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Call make_great function with a copy of the array of magicians
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians function with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
