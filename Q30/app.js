// Array of usernames
var usernames = ["admin", "eric", "john", "alice", "maria"];
// Loop through the array of usernames and print a greeting to each user
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
