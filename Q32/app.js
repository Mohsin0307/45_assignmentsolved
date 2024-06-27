// List of current users
var current_users = ["admin", "eric", "john", "alice", "maria"];
// List of new users
var new_users = ["john", "maria", "peter", "JOHN", "Anna"];
// Convert all current usernames to lowercase for case-insensitive comparison
var current_users_lowercase = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through the new users to check if the username is already taken
new_users.forEach(function (new_user) {
    // Convert the new username to lowercase
    var new_user_lowercase = new_user.toLowerCase();
    // Check if the new username already exists in the current users list
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log("The username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
});
