const prompt = require('prompt-sync')();

let date = prompt("Enter the date in the YYYY-MM-DD format:");
let year = date.slice(0,4);
let month = date.slice(5, 7);
let day = date.slice(8);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);