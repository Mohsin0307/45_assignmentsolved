// Function that stores information about a car in an Object
function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): object {
    let car: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model
    };
    // Add extra information to the car Object
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);

// Print the Object returned by the function
console.log(myCar);