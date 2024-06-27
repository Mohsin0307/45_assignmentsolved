// This program handles guest list changes, reduces the list to two guests, and prints the necessary messages.
// Initial list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
// Print the initial number of guests
console.log("Initial number of guests: ".concat(guests.length));
// Print initial invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Print a statement about the guest who can't make it
var unavailableGuest = "Nikola Tesla";
console.log("\nUnfortunately, ".concat(unavailableGuest, " can't make it to the dinner.\n"));
// Modify the guest list, replacing the unavailable guest
var newGuest = "Isaac Newton";
guests = guests.map(function (guest) { return guest === unavailableGuest ? newGuest : guest; });
// Print the number of guests after modification
console.log("Number of guests after replacement: ".concat(guests.length));
// Print new invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Print statement about finding a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table, so now more space is available.\n");
// Add more guests to the list
guests.unshift("Leonardo da Vinci"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei"); // Add to the middle
guests.push("Ada Lovelace"); // Add to the end
// Print the number of guests after adding more
console.log("Number of guests after adding more: ".concat(guests.length));
// Print new set of invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Print message about the limited space for dinner
console.log("\nUnfortunately, our new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
// Remove guests until only two remain, and print apologies
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Dear ".concat(removedGuest, ", I'm sorry but I can't invite you to dinner this time."));
    }
}
// Print the number of guests remaining
console.log("Number of guests remaining: ".concat(guests.length));
// Print messages to the two remaining guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Remove the last two names and print the empty list
guests.pop();
guests.pop();
// Print the empty list to confirm
console.log("\nFinal guest list: ".concat(JSON.stringify(guests)));
console.log("Final number of guests: ".concat(guests.length));
