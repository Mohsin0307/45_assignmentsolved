// Array of numbers from 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Function to get the ordinal suffix
function getOrdinalSuffix(number) {
    if (number === 1) {
        return "st";
    }
    else if (number === 2) {
        return "nd";
    }
    else if (number === 3) {
        return "rd";
    }
    else {
        return "th";
    }
}
// Loop through the array and print each number with its ordinal suffix
numbers.forEach(function (number) {
    console.log("".concat(number).concat(getOrdinalSuffix(number)));
});
