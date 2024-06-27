// Function that accepts a size and a message to be printed on the shirt
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Call the function with example arguments
make_shirt("M", "Hello, TypeScript!");
make_shirt("L", "Coding is fun!");
make_shirt("S", "Keep Calm and Code On");