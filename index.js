const input = require('readline-sync');
let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strPigBit = str.slice(0,3);
//console.log(strPigBit);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str.slice(3,10).concat(strPigBit)}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

strPigSlice = str.slice(0,input.question("How many letters will be moved? "));
console.log(`${str.slice(strPigSlice,10).concat(strPigSlice)}`);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (strPigSlice > str.length) {
  console.log(`That's too big! Don't be a pig! ${str.slice(3,10).concat(strPigBit)}`);
}