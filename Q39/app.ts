// Function that formats city and country name
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Rome", "Italy"));