#!/usr/bin/node 
// using distruct
// using slice(2) to start from the third element  of the process.argv array,
// skipping over the node command and the name of the script itself

const [arg] = process.argv.slice(2);

// using an if...else statement to check if arg exists
if (!arg) {
  console.log('No argument');

//  Otherwise, we print arg using console.log(...)
} else {
  console.log(arg);
}
