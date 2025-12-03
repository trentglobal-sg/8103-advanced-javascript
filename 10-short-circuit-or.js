const prompt = require('prompt-sync')();
console.log("true || false =", true || false);
console.log("false || true =", true || false);
console.log("true || true =", true || true);
console.log("false || false =", false || false);

function yes() {
    console.log("yes");
    return true;
}

function no() {
    console.log("no");
    return false;
}
// short circuit: yes() returns true and true || anything will be true
yes() || no();
// => true || no();

// no short circuit
no() || yes();
// => false || yes();
// => false || true

// When you use || on a chain values, the FIRST truthy value will be the result
console.log("a" || "b" || "c" || "d");