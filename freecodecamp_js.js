/* for multi-line commnet */ 
/* Data Types: 
undefined (has not set), null (set but you want it to be empty), boolean, string, symbol, number and object
*/

// Variable
// There are 3 ways to declare variables : var let and const
/* 
Variable = used throughout the whole program
Let = used within the scope you declare it
const = Can never change (constant). If you try to change it will return an error
*/
var myName  = "Carissa"
myName = 8 
let ourName = 'Not freeCodeCamp'
const pi = 3.1415926535897932384626433

var a; // Declaring a variable
var b = 2; // Declaring and assign a variable 

a = 7; 
b = a; 
console.log(a)

var a = 5; 
var b = "I am a "; 

a = a + 1; 
b = b + "String!"

console.log(a)
console.log(b)

// Remember JS is case sensitve - general practice to use camelCase

var sum = 10 + 0; 
console.log(sum)

var product = 8 * 9; 
console.log(product)

// Incrementing number - just add ++ at the back to add 1 
let myVar = 87; 
myVar2 = myVar + 1;
console.log(myVar2)
myVar++
console.log(myVar)
myVar+++
console.log(myVar)

// Decrement - -- also workds
let yVar = 11;
yVar--; 
console.log(yVar)

// Reminder: user percent sign
var remainder;
remainder = 11 % 3;
console.log(remainder)

// Combine (similar to python)
var e = 5
e += 9
console.log(e)

// How to use double quotes in a string - use \ or start your string with single quote or use backticks `
var myStr = "I am a \"double quote\""
console.log(myStr)

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)
/* Results: 
FirstLine
	\SecondLine
ThirdLine
*/

// Concatenate strings use + 
var ourStr = "I come first, "
ourStr += "I come second"
console.log(ourStr)
// Results:  I come first, I come second

var anAdjective = "awesome!"; 
var me = "I am "
me += anAdjective
console.log(me)

// Find length using length
var myNam = "Carissa"; 
console.log(myNam.length)

// [] Use for indexing
var firstLetter = "";
firstLetter = myNam[0]
console.log(firstLetter)

// Strings are immutable - they cannot be altered once created. You can change the strings (complete replace) but you cannot change individual letters in a string

// Find the last index (length - 1)
var lastLetterofmyNam = myNam[myNam.length - 1];
console.log(lastLetterofmyNam)