//IIFE
function newItem (){

  let li = $('<li></li>');
  let inputValue = $('#input').val();

  //Appeding li element to be a child of input element
  li.append(inputValue);

  //Giving users a message upon empty entry
  if (inputValue === '') {
    alert("You must write something!");
  }
  else {
    $('#list').append(li);
  }

  //Crossing out an item
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
  });

  //Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');

  //Appending crossOutButton
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete')
  }

  //Makes list sortable
  $('#list').sortable();
}
