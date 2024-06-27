// Function that prints the names of magicians in the array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Call the function to show the magicians
show_magicians(magicians);
