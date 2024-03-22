#!/usr/bin/node
// a JavaScript script that updates the text of the <header> element to
// New Header!!! when the user clicks on DIV#update_header
const $header = $('header');
const $updateHeader = $('#update_header');
$updateHeader.on('click', () => {
  $header.text('New Header!!!');
});
