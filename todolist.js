let todos = [];
let nextId = 1;

function addTodo(todo) {
    const newtodo = {
        id: nextId,
        text: todo,
        done: false
    }
    nextId++;
    todos.push(newtodo);
}

function printTodos() {
    for(let todo of todos) {
    console.log(todo.done === false ? todo.text + " - not done" :  todo.text + " - complete" );
    }
}
 
function complete(id) {
    const todo = todos.find(function(t) {
        return t.id === id;
    })
    if(!todo){
        console.log("no id")
    } else{
    todo.done = true;
    }
}

function deleteTodo(id) {
  todos = todos.filter(function(v) {
   return v.id !== id;
  })
}

addTodo("study")
addTodo("eat")
complete(999)
deleteTodo(1)
printTodos()
