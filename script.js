var todoList= {
  todos:[],
  displayTodos: function(){
    if(this.todos.length === 0 ){
      console.log('Your todo List is empty.');
    }else{
       console.log('My todos:');
    for(var i=0; i< this.todos.length; i++ ){
      if(this.todos[i].completed===true){
         console.log('(x)',this.todos[i].todoText);
      }else{
        console.log('( )',this.todos[i].todoText);
      }
    }
    }
  },
  addTodos: function(todoText){
    this.todos.push({
      todoText:todoText,
      completed:false
    });
    this.displayTodos();
  },
  changeTodos: function(position,todoText){
    this.todos[position].todoText=todoText;
    this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    
    var totalTodos = this.todos.length;
    var completedTodos=0;
    
 for(var i=0;i<totalTodos;i++){
   if(this.todos[i].completed===true){
     completedTodos++;
   }
 }
 if(completedTodos===totalTodos){
   for(var i=0;i<totalTodos;i++){
     this.todos[i].completed =!(this.todos[i].completed);
   }this.displayTodos();
 }
    else{
      for(var i=0;i<totalTodos;i++){
        this.todos[i].completed = true;
      }this.displayTodos();
    }
  }
};
////BUTTON DISPLAY
var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function() {
 todoList.displayTodos();
});
////BUTTON TOGGLE
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click',function(){
    todoList.toggleAll();
    
});
