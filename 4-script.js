#!/usr/bin/node
// a JavaScript script that toggles the class of the <header> element
// When the user clicks on the tag DIV#toggle_header
const $header = $('header');
const $divClick = $('#toggle_header');
$divClick.on('click', () => {
  if ($header.attr('class') === 'green') {
    $header.attr('class', 'red');
  } else {
    $header.attr('class', 'green');
  }
});
