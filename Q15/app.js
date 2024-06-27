// This program stores a list of people to invite to dinner, prints invitations, handles a guest cancellation, and sends new invitations.
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
