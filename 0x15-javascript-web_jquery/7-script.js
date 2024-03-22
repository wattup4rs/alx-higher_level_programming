// a JAvaScript script that fetches the character name from this URL
const $character = $('#character');
$.ajax({
  type: 'GET',
  url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
  success: (people) => {
    const $Name = people.name;
    // console.log($Name);
    $character.text($Name);
  }
});
