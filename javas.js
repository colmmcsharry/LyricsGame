 var todoList = {
 todos:  [],
                                             
addTodos: function(todoText){
    this.todos.push({
        todoText: todoText, 
        completed: false
    });
},

deleteTodo: function(position){
    this.todos.splice(position, 1);/*with splice, the first thing is the starting postion in the array, the second is the amount of things to delete*/
},

    toggleAll: function() {
     var totalAll = this.todos.length;
     var completedTodos = 0;


    this.todos.forEach(function(todo){
    if (todo.completed === true) {
        completedTodos++}
    });
    
    this.todos.forEach(function(todo){
        if (completedTodos === totalAll) {
            todo.completed = false;
        } else {
            todo.completed = true;
        }
    })
    
// }


// }
}};


     /* we need to create a variable so we can access these functions from the HTML? afterwards, can try creating these functions the usual way without creating an Object, and see if i can still trigger them from the HTML, without having to type handlers.displayTodos */
     var handlers = {
    toggleAll: function(){
        todoList.toggleAll()
        view.displayTodos()
    },
    // toggleCompleted: function()
    // {todoList.toggleCompleted()
    // },

    addTodos: function(){
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        todoList.addTodos(addToDoTextInput.value);
        addToDoTextInput.value = ""; /* this makes it go back to blank after we enter something */
    view.displayTodos()},

    deleteTodo: function(position){
        todoList.deleteTodo(position);
    view.displayTodos()}
}


  /* so, if you look above where we originally defined deleteTodo, it takes position as its argument. so now, we are giving it the valueAsNumber, when you click on the delete button */
var view = {displayTodos: function(){
    var grabUl = document.querySelector("ul");
 grabUl.innerHTML = "" /*Makes sure list is cleared before we add items*/
todoList.todos.forEach(function(todo, position){  
    var todoLi = document.createElement("li")   
    var todoTextWithCompletion = "";

    if (todo.completed === true)
    {todoTextWithCompletion = "(X) " + todo.todoText;
    }
else {
    todoTextWithCompletion = "( ) " + todo.todoText;
    }

    todoLi.id = position;
    todoLi.textContent = todoTextWithCompletion; 
todoLi.appendChild(this.createDeleteButton());
grabUl.appendChild(todoLi);
}, this);
},


// textContent is a built-in property that can be changed. we are makig it equal to
// whatever goes in the todoText argument

 createDeleteButton: function() {
    var deleteButton = document.createElement('button'); /*creates a button*/
     deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton"; /*there will be several of these buttons so may aswell make a class*/
    return deleteButton; /*returns it in console, but we havent inserted into HTML yet*/
 },

 setUpEventListeners: function (){
    var newGrabUl = document.querySelector("ul"); /*we have to define a new one, because remember, we can't see inside of objects/functions, only they can see out*/

    newGrabUl.addEventListener('click', function(whateverEvent){/*so now, when i click on the ul, A function runs, that logs to the console whatever
    I clicked on. we have to use Parentnnode because the Delete buttons don't have IDs, but they are children of the Lis, so can be accessed that way*/;
/*so now, when I click on the Ul, it will log the event*/
    var elementClicked = whateverEvent.target;
    // console.log(whateverEvent); can use this if you want to see a log of the event
    if (elementClicked.className === "deleteButton"){
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));/*we use parseInt because the id (i) is a string, whereas position (from handlers.deleteTodo) is a number*/
    /*so parseint tries to convert string to integer. ie. i is a string, but if it's equal to position zero, parseint treats it as integer zero*/
    }
    })
}
// The reason we do the above, (just adding one event listener on the parent node (UL) and checking to see which target was clicked, rather than
// loads of individual listeners on each lI is to make things faster,) This is called Event Delegation and is really common and useful.
// it's also called Event propogation or bubbling. (it bubbles up to the parent element)

}
view.setUpEventListeners(); /*we do this so the code runs automatically*/




