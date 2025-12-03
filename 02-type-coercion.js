// String + a number will convert the number to a string first
console.log("2" + 2); // we will get 22

// String * a number will convert the string to a number first
console.log("2" * 2);

// type functions
let a = "2";
console.log(2 + parseInt(a));

let b = "3.14";
console.log(2 + parseFloat(b));

let c =  "3.145";
console.log(2 + Number(c));

let d = "4";
console.log(2 + Number(d));

// Convert a number to a string
console.log(2 + "");

// Know the difference == vs. ===
let x = 10;
let y = "10";
console.log(x == y);  // means check if the left hand side and right hand side are the same
                      // will resolve to be `true` if same