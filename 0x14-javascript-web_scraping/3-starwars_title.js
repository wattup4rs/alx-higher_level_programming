#!usr/bin/node
// a script tht prints the tilte of a star wars movie where
// the episode number matches a given integer

const request = require('request');
async function getMovieTitle () {
  const movieId = process.argv[2];
  const requestURL = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;
  request.get(requestURL, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie title:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(response.statusCode);
      return;
    }
    const movie = JSON.parse(body);
    const movieTitle = movie.title;
    console.log(movieTitle);
  });
}
getMovieTitle();
