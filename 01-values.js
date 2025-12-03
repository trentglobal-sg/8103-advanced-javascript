let a;  // when a value is not assigned to a variable, it holds `undefined`
        // it never recieve a value
        // when a variable is undefined, is often the case that there is an error in your code
console.log(a);

// null means "no data"
// null is always delibrately assigned by the programmer
let b = null;

// Value: NaN is a value that happens when an illegal operation
// is performed between two data type involving an arth. operator
// NaN combined with any other number will always be a NaN
console.log( "twenty two" / 2);
console.log( a - 5);
let c = "twenty two" / 2;
console.log(c + 3 * 10 - 5); // <-- reason: why we never use JavaScript for accounting software

// Division by 0
console.log(3/0);
console.log(3/0+5); // <-- reason 2: why we never use JavaScript for accounting software