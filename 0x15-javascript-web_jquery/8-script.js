// a Javascript script that fetches and lists the title
// for all movies by using thus URL
const &listMovie = &('#list_movies');
$.ajax({
  type: 'GET',
  url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
  success: (films) => {
    const $filmList = films.results;
    // console.log(filmList);
    for (let i = 0; i < $filmList.length; i++) {
      const $filmName = $filmList[i].title;
      // console.log(filmName);
      const $listName = $('<li>');
      $listName.text($filmName);
      $listMovie.append($listName);
    }
  }
});
