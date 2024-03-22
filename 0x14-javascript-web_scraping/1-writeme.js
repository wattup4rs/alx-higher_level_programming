#!/usr/bin/node
// a script that writes a string to a file

const fs = require('fs').promises;

async function writeMe () {
  try {
    await fs.writeFile(process.argv[2], process.argv[3], 'utf8');
  } catch (error) {
    console.log(error);
  }
}
writeMe();
