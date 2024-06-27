// Function that adds "the Great" to each magician's name in the array
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Function that prints the names of magicians in the array
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Call make_great function to modify the array of magicians
make_great(magicians);

// Call show_magicians function to see the modified list
show_magicians(magicians);