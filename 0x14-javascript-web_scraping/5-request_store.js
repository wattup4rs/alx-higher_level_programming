#!/usr/bin/node
// a script that gets the contents of a webpage
// and stores it in a file

const fs = require('fs').promises;
const request = require('request');

async function getStoreWebContent () {
  const requestURL = process.argv[2];
  const filename = process.argv[3];
  request.get(requestURL, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie title:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(response.statusCode);
      return;
    }
    const contents = body;
    writeMe(filename, contents, 'utf8');
  });
}

//  a script that writes a string to a file.
async function writeMe (filename, content, encoding) {
  try {
    await fs.writeFile(filename, content, encoding);
  } catch (error) {
    console.log(error);
  }
}

getStoreWebContent();
