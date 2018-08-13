function addNew() {
  console.log($('.list-group li').length);
  var new_to_do = prompt("What you want to add?");
  if (new_to_do.length > 0 && new_to_do !== null) {
    $('.list-group').append('<li class ="list-group-item list-group-item-action">' + new_to_do + '</li>');
  }
}

$(document).ready(function () {
  $('.list-group-item').on('dblclick', function () {
    this.classList.add('completed');
  })
});