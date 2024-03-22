#!/usr/bin/node
// process.argv is an energy that contains the command-line arguments passed to the script
// So we access the third and fourth elemnts (process.argv[2] and process.argv[3]) to get the two


const arg1 = process.argv[2];
const arg2 = process.argv[3];

// use template literals (the backtick characters surrounding the string) to interpolate the values of arg1 and arg2 into the output string in the specified format

console.log(`${arg1} is ${arg2}`);
