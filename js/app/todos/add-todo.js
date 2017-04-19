
function AddTodo() {
  var $form = $('<form />');

  $form.submit(function(event) {
    event.preventDefault();
    
    var todos = data.readData('todos');
    if (!todos) {
      todos = [];
      data.createData('todos', JSON.stringify([]));
    } else {
      todos = JSON.parse(todos);
    }
    
    todos.push($addField.val());
    data.updateData('todos', JSON.stringify(todos));

    $form[0].reset();

    events.send('get-todos-list');
  });

  var $addField = $('<input type="text" />');
  var $addButton = $('<button type="submit" />');

  $addButton.html('Add Todo Item');

  $form.append($addField);
  $form.append($addButton);

  $('#todo_add').append($form);
}

var addTodo = new AddTodo();
