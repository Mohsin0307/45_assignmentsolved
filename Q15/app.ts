// This program stores a list of people to invite to dinner, prints invitations, handles a guest cancellation, and sends new invitations.

// Initial list of guests
const guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

// Print initial invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Print a statement about the guest who can't make it
const unavailableGuest: string = "Nikola Tesla";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.\n`);

// Modify the guest list, replacing the unavailable guest
const newGuest: string = "Isaac Newton";
const updatedGuests: string[] = guests.map(guest => guest === unavailableGuest ? newGuest : guest);

// Print new invitation messages
updatedGuests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});