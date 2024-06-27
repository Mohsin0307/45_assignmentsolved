//lowercase
let personName:string = "Karachi"
console.log("lowercase", personName.toLowerCase());

// uppercase
// 
console.log("uppercase:", personName.toUpperCase());

// Tittle Case
console.log("tittecase:", personName.replace(/\bw/g,C=> C.toUpperCase()));