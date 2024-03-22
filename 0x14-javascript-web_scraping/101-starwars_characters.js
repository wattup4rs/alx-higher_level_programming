#!/usr/bin/node
// a script that prints all characters of a Star WARS MOVIE


const request = require('request');
async function getMovie () {
  const movieId = process.argv[2];
  const requestURL = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
  await new Promise((resolve, reject) => {
    request.get(requestURL, async (error, response, body) => {
      if (error) {
        console.error('Error fetching movie:', error);
        reject(error);
      }

      if (response.statusCode !== 200) {
        console.error('Status code:', response.statusCode);
        reject(response.statusCode);
      }
      const movie = JSON.parse(body);
      // console.log(movie["characters"]);
      const characters = movie.characters;
      // console.log(characters);

      for (let index = 0; index < characters.length; index++) {
        const peopleLink = characters[index];
        // console.log(peopleLink);
        await getCharacterName(peopleLink);
      }
      resolve();
    });
  });
}

async function getCharacterName (peopleLink) {
  return new Promise((resolve, reject) => {
    request.get(peopleLink, (error, response, body) => {
      if (error) {
        console.error('Error fetching people:', error);
        reject(error);
      }

      if (response.statusCode !== 200) {
        console.error('Status code:', response.statusCode);
        reject(response.statusCode);
      }
      const person = JSON.parse(body);
      console.log(person.name);
      resolve();
    });
  });
}
getMovie();
