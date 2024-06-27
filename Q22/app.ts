// Define an interface for City
interface City {
    name: string;
    country: string;
    population: number;
}

// Create a list of city objects
let cities: City[] = [
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
for (let i = 0; i <= cities.length; i++) { // Intentional error: using <= instead of <
    console.log(`Name: ${cities[i].name}, Country: ${cities[i].country}, Population: ${cities[i].population}`);
}
// Define an interface for City
interface City {
    name: string;
    country: string;
    population: number;
}

// Create a list of city objects
let cities: City[] = [
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
for (let i = 0; i < cities.length; i++) { // Corrected: using < instead of <=
    console.log(`Name: ${cities[i].name}, Country: ${cities[i].country}, Population: ${cities[i].population}`);
}