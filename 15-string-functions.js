let words = "apples";
let phrase = "She Sells SeaShells";

// String functions to return a copy of the string but the copy is transformed
// (aka String Transformations)
console.log(words.toUpperCase());
console.log(phrase.toLowerCase());

// trim() will remove whitespaces from the start and from the end
console.log("                     abc".trim());
console.log("a                          ".trim(),'*');
console.log(`${"                  a".trim()}*`);

let fruits = "apples oranges durains";
console.log(fruits.replace("oranges", "bananas"));
fruits = fruits.replace("oranges", "bananas"); // must reassign to the original variable to change the string
console.log("Fruits after reassignment =", fruits);

// split will convert a string into an array
let favoriteFood="roti prata,chicken rice,duck rice";
let foodArray = favoriteFood.split(",");
console.log(foodArray);

let email = "yourname@somewhere.com";
console.log(email.includes("@"));
console.log(email.includes("somewhere.com")); // return true / false
console.log(email.indexOf("@")); // return the index of the specified substring
                                 // will return -1 if not found

