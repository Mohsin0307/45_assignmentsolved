// Function that adds "the Great" to each magician's name in a copy of the array
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}

// Function that prints the names of magicians in the array
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Original array of magician's names
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Call make_great function with a copy of the array of magicians
let great_magicians: string[] = make_great([...magicians]);

// Call show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians function with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);