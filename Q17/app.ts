// This program handles guest list changes, reduces the list to two guests, and prints the necessary messages.

// Initial list of guests
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

// Print initial invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Print a statement about the guest who can't make it
const unavailableGuest: string = "Nikola Tesla";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.\n`);

// Modify the guest list, replacing the unavailable guest
const newGuest: string = "Isaac Newton";
guests = guests.map(guest => guest === unavailableGuest ? newGuest : guest);

// Print new invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Print statement about finding a bigger dinner table
console.log(`\nGreat news! We found a bigger dinner table, so now more space is available.\n`);

// Add more guests to the list
guests.unshift("Leonardo da Vinci"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei"); // Add to the middle
guests.push("Ada Lovelace"); // Add to the end

// Print new set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Print message about the limited space for dinner
console.log(`\nUnfortunately, our new dinner table won't arrive in time, and we can only invite two people for dinner.\n`);

// Remove guests until only two remain, and print apologies
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Dear ${removedGuest}, I'm sorry but I can't invite you to dinner this time.`);
    }
}

// Print messages to the two remaining guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names and print the empty list
guests.pop();
guests.pop();

// Print the empty list to confirm
console.log(`\nFinal guest list: ${JSON.stringify(guests)}`);