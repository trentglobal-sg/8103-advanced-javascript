const prompt = require('prompt-sync')();

let filename = prompt("Enter the filename:");
filename = filename.toLowerCase();
let chunks = filename.split(".");
let extension = chunks[chunks.length - 1];
console.log("Extension =", extension);