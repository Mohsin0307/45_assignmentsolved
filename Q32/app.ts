// List of current users
let current_users: string[] = ["admin", "eric", "john", "alice", "maria"];

// List of new users
let new_users: string[] = ["john", "maria", "peter", "JOHN", "Anna"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());

// Loop through the new users to check if the username is already taken
new_users.forEach(new_user => {
    // Convert the new username to lowercase
    let new_user_lowercase = new_user.toLowerCase();

    // Check if the new username already exists in the current users list
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`The username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
});