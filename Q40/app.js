// Function that builds an object describing a music album
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album("Ed Sheeran", "Divide", 12);
var album2 = make_album("Taylor Swift", "1989");
var album3 = make_album("Imagine Dragons", "Evolve", 14);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
