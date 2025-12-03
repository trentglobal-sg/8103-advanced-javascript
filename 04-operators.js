// Operators in JavaScript
// 1. Variable Sub
// 2. ( )
// 3. Function Calls
// 4. Arth operators
//    ** 
//    * /  %
//    + -
// 5. Comparsion operators  < > == === <= >= <== >==
// 6. Logical operators && ||
// 7. Assignment operator =

// post increment and pre-increment
let a = 3;
a = a + 1; 
// => a = 3 + 1
// => a = 4

let b = 3;
b++; // post-increment  -- after line 20, +1
console.log(b);

++b; // pre-increment -- before line 23, +1 -- it's slightly faster
console.log(b);

for (let i =0 ; i<10;++i) {
    console.log(i);
}

let c = 5;
console.log(c--);
console.log(--c);

// shorthand for increment and decrement
let z = 10;
z += 1;  // same as z = z + 1

z -= 10; // same as z = z - 10;
z *= 2 //  same z = z * 2
z /= 2; // same z = z / 2
