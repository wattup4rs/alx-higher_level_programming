#!/usr/bin/node
// a script that prints all characters of a star Wars movie

cosnt request = require('request');
async function getMovie () {
  const movieId = process.argv[2];
  const requestURL = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
  request.get(requestURL, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Status code:', response.statusCode);
      return;
    }
    const movie = JSON.parse(body);
    // console.log(movie["characters"]);
    const characters = movie.characters;
    for (let index = 0; index < characters.length; index++) {
      const peopleLink = characters[index];
      // console.log(peopleLink);s
      getCharacterName(peopleLink);
    }
  });
}

async function getCharacterName (peopleLink) {
  request.get(peopleLink, (error, response, body) => {
    if (error) {
      console.error('Error fetching people:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Status code:', response.statusCode);
      return;
    }
    const person = JSON.parse(body);
    console.log(person.name);
  });
}
getMovie();
