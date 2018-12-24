 var todoList = {
 todos:  [],
displayTodos: function(){     
    if (this.todos.length === 0){
        console.log ("You haven't got anything to do!");}
        else {console.log("Mytodos:");
        for (var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true){
            console.log ("(x)", this.todos[i].todotext);}
        else {console.log ("( )", this.todos[i].todotext);}
    }                               
}},                                              
addTodos: function(todotext){
    this.todos.push({
        todotext: todotext, 
        completed: false
    });
    this.displayTodos();
},
changeToDo: function(position, todotext){
    this.todos[position].todotext = todotext;
    this.displayTodos();
},
deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
},
toggleCompleted: function(position){
    debugger;
   var chosenTodo = this.todos[position];
   chosenTodo.completed = !chosenTodo.completed;
   this.displayTodos()
},
toggleAll: function() {
 var totalAll = this.todos.length;
 var completedtodos = 0;

for ( var i = 0; i < totalAll; i++)
{if (this.todos[i].completed === true)
{completedtodos++;}
}
if (completedtodos === totalAll) {
    for (var i = 0; i < totalAll; i++) {
    this.todos[i].completed = false;
}
} else { for (var i = 0; i < totalAll; i++)
{this.todos[i].completed = true;}

}
this.displayTodos();


}

}

     /* we need to create a variable so we can access these functions from the HTML? afterwards, can try creating these functions the usual way without creating an Object, and see if i can still trigger them from the HTML, without having to type handlers.displayTodos */
     var handlers = {
         displayTodos: function(){
        todoList.displayTodos()
    },
    toggleAll: function(){
        todoList.toggleAll()
    },
    addTodos: function(){
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        todoList.addTodos(addToDoTextInput.value);
        addToDoTextInput.value = "" /* this makes it go back to blank after we enter something */
    },
    deleteTodo: function(){
        var deleteToDoPositionInput = document.getElementById("deleteToDoPositionInput");
        todoList.deleteTodo(deleteToDoPositionInput.valueAsNumber);
        deleteToDoPositionInput.value = ""
    }
    /* so, if you look above where we originally defined deleteTodo, it takes position as its argument. so now, we are giving it the valueAsNumber, when you click on the delete button */
}
