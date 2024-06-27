// Function that adds "the Great" to each magician's name in the array
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Function that prints the names of magicians in the array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Call make_great function to modify the array of magicians
make_great(magicians);
// Call show_magicians function to see the modified list
show_magicians(magicians);
