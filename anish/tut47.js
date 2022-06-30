console.log("This is tutorial 47");

function greet(name, greetText="Greetings from JavaScript") {
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let name = "Anish";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);

let returnVal = sum(1, 2, 3);
console.log(returnVal)