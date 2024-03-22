#!/usr/bin/node
// a JavaScript script that adds a <li> element to a lsit
// When the user clicks on the tag DIV#add_item
// const $addItem = $('#add_item');
const $list = $('.my_list');
$addItem.on('click', () => {
  const $item = $('<li>');
  $item.text('Item');
  $list.append($item);
});
