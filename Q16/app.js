// This program handles guest list changes, adds more guests, and prints invitation messages.
// Initial list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
// Print initial invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Print a statement about the guest who can't make it
var unavailableGuest = "Nikola Tesla";
console.log("\nUnfortunately, ".concat(unavailableGuest, " can't make it to the dinner.\n"));
// Modify the guest list, replacing the unavailable guest
var newGuest = "Isaac Newton";
var updatedGuests = guests.map(function (guest) { return guest === unavailableGuest ? newGuest : guest; });
// Print new invitation messages
updatedGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Print statement about finding a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table, so now more space is available.\n");
// Add more guests to the list
updatedGuests.unshift("Leonardo da Vinci"); // Add to the beginning
updatedGuests.splice(Math.floor(updatedGuests.length / 2), 0, "Galileo Galilei"); // Add to the middle
updatedGuests.push("Ada Lovelace"); // Add to the end
// Print new set of invitation messages
updatedGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
