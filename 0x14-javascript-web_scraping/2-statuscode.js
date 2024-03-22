#!/usr/bin/node
// a script that displays the status code of GET request.


const request = require('request');

function statusCode () {
  const requestURL = process.argv[2];
  request.get(requestURL, (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(`code: ${response.statusCode}`);
  });
}
statusCode();
