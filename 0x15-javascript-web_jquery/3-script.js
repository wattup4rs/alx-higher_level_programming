#!/usr/bin/node
// a JavaScript script that adds the class red to the <header> element
// when the user clicks on the tag DIV#red_header
const $header = $('header');
const $divClick = $('#red_header');
$divClick.on('click', () => {
  $header.addClass('red');
});
