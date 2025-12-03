const prompt = require('prompt-sync')();

let filename = prompt("Enter the filename:");
filename = filename.toLowerCase();
let dotIndex = filename.lastIndexOf('.');
let extension = filename.slice(dotIndex+1);
console.log("Extension =", extension);
if (extension == "xls" || extension == "doc" || extension == "docx") {
    console.log("File is a document")
} else if (extension == "bmp" || extension == "png" || extension == "jpg" || extension == "jpeg") {
    console.log("File is an impage")
}