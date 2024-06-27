// Function that stores information about a car in an Object
function carInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add extra information to the car Object
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
// Print the Object returned by the function
console.log(myCar);
