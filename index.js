const input = require('readline-sync');
let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strPigBit = str.slice(0,3);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str.slice(3,10).concat(strPigBit)}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
strPigBit = input.question("How many letters will be moved? ");

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
