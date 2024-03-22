#!/usr/bin/node
// a script that reads and prints the content of a file.
//
const fs = require(('fs').promises;

async function readFile (filepath, encoding) {
  try {
    const data = await fs.readFile(filepath, encoding);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readFile(process.argv[2], 'utf8');
