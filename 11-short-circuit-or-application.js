const prompt = require('prompt-sync')();

let userName = prompt("Please enter your user name");
userName = userName || "guest";
// if (userName==""){
//     userName = "guest";
// }
console.log("Welcome,", userName);