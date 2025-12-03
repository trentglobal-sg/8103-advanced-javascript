//  BASIC STRING PROCESSING

// you can access a string's individual character by its index
let password = "rotiprata and iced milo";
console.log(password[4]);

// slice a string to get a substring (chunk of the original string)
// slice will take up to two parameters
// if slice has two arguments, x and y, it means starting slicng from index x
// and end 1 before index y;
console.log("password.slice(4, 8) =>", password.slice(4, 8));
console.log("password = ", password);
//              01234567
let username = "tanahkow";
username = username.slice(4, 9);  // the sliced string will overwrite the original name
console.log("username =", username);

// slice can also take one parameter 
// it will slice from that index to the end
let firstName="Jonathan";
console.log(firstName.slice(3));

// ISO date format: YYYY-MM-DD
// Date: 2026-12-03  => 2026, 3rd Feb
//
// Write a program - ask the user to enter the date in the YYYY-MM-DD
// Display the year, the month and the day on different lines
// For example: 2026-12-03
// Year: 2026
// Month: 12
// Day: 03