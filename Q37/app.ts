// Function that accepts a size and a message to be printed on the shirt with default values
function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("M");

// Make a shirt of any size with a different message
make_shirt("S", "TypeScript is awesome!");