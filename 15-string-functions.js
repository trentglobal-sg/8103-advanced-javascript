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


/*
Use prompt sync to ask for a filename.
Eg: report.doc, image.png

BASIC TASK
1. find the file extension of the file (report.doc => doc)
2. tell the user if the file is a document or an image
   document: xls, doc
   images: png, bmp, jpg

INTERIMEDIATE TASK
1. Support .xslx for doc, and .jpeg for images
2. must support both uppercase and lowercase
   ex: report.DOC and report.doc is actually the same

EXPERT TASK
1. Support multiple dot in the file name
Example: reporta.reportb.doc

ULTIMATE
Only use a FOR loop and indexing each character
- string concatation (combine two strings)

*/

let a = "the quick brown fox";
for (let i  =0; i < a.length; i++) {
    console.log(a[i]);
}