// Create a list of city objects
var cities = [
    {
        name: "Tokyo",
        country: "Japan",
        population: 37400068
    },
    {
        name: "New York",
        country: "USA",
        population: 18804000
    },
    {
        name: "Paris",
        country: "France",
        population: 11020000
    },
    {
        name: "Sydney",
        country: "Australia",
        population: 5312000
    },
    {
        name: "Cape Town",
        country: "South Africa",
        population: 433688
    }
];
// Print the list of cities
console.log("List of Cities:");
for (var i = 0; i <= cities.length; i++) { // Intentional error: using <= instead of <
    console.log("Name: ".concat(cities[i].name, ", Country: ").concat(cities[i].country, ", Population: ").concat(cities[i].population));
}
// Create a list of city objects
var cities = [
    {
        name: "Tokyo",
        country: "Japan",
        population: 37400068
    },
    {
        name: "New York",
        country: "USA",
        population: 18804000
    },
    {
        name: "Paris",
        country: "France",
        population: 11020000
    },
    {
        name: "Sydney",
        country: "Australia",
        population: 5312000
    },
    {
        name: "Cape Town",
        country: "South Africa",
        population: 433688
    }
];
// Print the list of cities
console.log("List of Cities:");
for (var i = 0; i < cities.length; i++) { // Corrected: using < instead of <=
    console.log("Name: ".concat(cities[i].name, ", Country: ").concat(cities[i].country, ", Population: ").concat(cities[i].population));
}
