// Array of usernames
var usernames = ["admin", "eric", "john", "alice", "maria"];
// Function to print greetings
function greetUsers(users) {
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        users.forEach(function (username) {
            if (username === "admin") {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
            }
        });
    }
}
// Initial greeting
greetUsers(usernames);
// Remove all users
usernames = [];
// Check and greet again with the updated list
greetUsers(usernames);
