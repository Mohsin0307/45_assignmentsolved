const guests: string[] = ["Albert Einstein", "Asif", "Shakeel"]; // Array storing names of guests

// Loop through the array and print a personalized invitation message for each guest
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`); // Printing personalized invitation message
});