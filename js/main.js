var $input = $('#todo-input');
var $list = $('.todo-list');

$('#todo-list').on('submit', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
