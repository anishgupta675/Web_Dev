const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "Anish");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("anish.txt", text);