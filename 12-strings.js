// How to we define a string
// if begin with double quote, end with double quote
let rhyme = "She sells seashells at the seashore";
// if begin with the single quote, end with single quote
let words = 'The quick brown fox jumps over the lazy dog';

console.log("I don't know anything");
console.log('She said, "I know what you did last Thursday"');

// Escape sequences
// Represent special characters that you cannot type on the keyboard normally
// Escape sequence begins with \
// It tells JavaScript the next character that follows is part of the string, not part of the programming
// aka literal text
// \n = newline
// \t = tab
console.log("Dear sir,\n\tYour bill of $10000 is due");

// The other use of escape seuquence the character is part of the text
// and not the programming
console.log("She said, \"I don't know anything\"");
console.log('He said, "I don\'t believe you"');

// Backtick strings (ES2016)
// 1. It span multiple lines in the program
// 2. support special character
// 3. support JavaScript Expressions

function calculateRepaymentPlan(amount) {
    // repayment will be / 12 + 0.5% 
    return amount * 1.05 / 12;
}


let amountDue = 5000;
let letter = `Dear Sir,
    Your bill of $${amountDue} is due. Please pay by the end
    of this month or you be fined 10% of the amount which is $${amountDue * 0.1}.
    
    ${
        amountDue > 1000 ? "You may call our VIP hotline to dispute" : ""
    }

    You are eligible for a repayment plan for monthly payment of ${calculateRepaymentPlan(amountDue)}
    Our motto: "We will serve you blah blah"
    
    `;
console.log(letter);