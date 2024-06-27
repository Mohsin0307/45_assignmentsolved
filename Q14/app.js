var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"]; // Array storing names of guests
// Loop through the array and print a personalized invitation message for each guest
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner.")); // Printing personalized invitation message
});
