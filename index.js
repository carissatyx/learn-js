// Comement - Remember to add ; to end 
// Seperation of Concerns (HTML for content; Javascript to implement behaviour)
console.log('Hello World');

// let name = 'Carissa'; // Use let to create variable
// console.log(name);

// Cannot be a reserve keyword 
// Should be meaningful 
// Cannot start with number (1name)
// Cannot contain a space or hyphen 
// Are case-sensitive

// let firstName = "Carissa", lastName = "Tan"; // Note this best practice

// Best practice
// let firstName = "Carissa";
// let lastName = "Tan"; 

let interestRate = 0.3; // This is a variable
interestRate = 1; // Interest rate is updated here
console.log(interestRate); 

// If you don't want the variable to change, use const
const loanRate = 0.4; 
console.log(loanRate)

// In JS there is Primitive/Value Types and Reference Types
// Primitive/Value Types
let name = 'Mosh'; // Srting Literal
let age = 30; // Number Literal
let isApproved = false; // Booleen Literal
let firstName = undefined; 
let selectColor = null; // clear the value of a variable

// Javascript is a dyamic language | Static vs Dynamic language
// Command K to clear console
// In JS floating number is just called number (no difference)

// Reference Types: Object Array and Function 
// Object is list a properties of a thing

// Object
let person = { 
    name: 'Most', 
    age: 30
};

// Dot Notation
person.name = 'John'; // Use this default

// Bracket Notation 
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name)

// Array: In JS, Array in an object. Use to represent a list of item
let selectedColors = ['red','blue']; 
selectedColors[2] = 'green'; // You can also uses numbers
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// Functions 
function greet(name, lastname) {
    console.log('Hello ' + name + lastname);
} // Note when declaring a function you don't need use semi colon
// name is a parameter, usable inside the function 

greet('John', 'Smith'); // John is an argument -> name (column header is a parameter, while John is an argument)
greet('Mary')

// Calcuate a value

function square(number) { 
    return number * number;
}

let number = square(2); 
console.log(number);

// Best practice console.log(square(2)); // 2 function calls 
