// Truthy and Falsy values
// Those are values are eqv false when used as condition
// and when used with logical operators
if (0) {
    console.log("0 is falsy");
}


if (NaN) {
    console.log("NaN is falsy")
}

if ("") {
    console.log("empty string is falsy")
}

if (false) {
    console.log("false is falsy");
}

if (undefined) {
    console.log("undefined is falsy")
}

if (null) {
    console.log("null is falsy")
}
// everything else is considered as truthy!