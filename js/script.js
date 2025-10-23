// 1. DOM referenser
const todoList = document.getElementById("todos");

const button = document.getElementById("addBtn");

const input = document.getElementById("input");



// 2. Eventlyssnare - När ett formulär submittas anropa funktion addTodo()

button.addEventListener("click", (event) => addTodo(event));



// 3. Börja med en tom array på todos
// samt ett id som börjar på noll

let todos = [];
let currentId = 0;


// 4. Lägg till en Todo som ett objekt  i arrayen todos
function addTodo(event) {

    event.preventDefault();

    const todo = {
        id : currentId + 1,
        task : input.value,
        completed : false
    };

    todos.push(todo)
    currentId += 1;  

    input.value = "";
    renderList()
}



// 5. Funktion som renderar listan på index.html varje gång listan förändraas
function renderList() {

    todoList.innerHTML = "";
    
    todos.forEach(todo => {

        todoList.innerHTML += `
            <li id="${todo.id}" class="${todo.completed ? "completed" : ""}">
                <span >${todo.task}</span>
                <button >X</button>
            </li>
        `
    })

    console.log(todos)

    // Iterera genom varje list-element och skapa en <li></li> med todo-texten, samt en close-knapp

}






// BONUS! Uppdatera eller ta bort en Todo. Använd er av s.k event delegation
todoList.addEventListener('click', function(event) {
        // Element som klickades på i listan
        console.log(event.target);

        if(event.target.tagName == "SPAN"){
            // Om man texten klickas => anropa toggleTodoCompletion
            toggleTodoCompletion(event.target.parentElement.id)
        } else if(event.target.tagName == "BUTTON"){
            deleteTodo(event.target.parentElement.id)
        }



        
        // Eller om close-knappen klickas => anrop deleteTOto

});


// Bonus! Uppdatera en todo med visst id. Toggle "completed"
function toggleTodoCompletion(id) {
    const item = todos.find(i => i.id == id)
    if (item.completed){
        item.completed = false;
    }
    else {
        item.completed = true;
    }
    renderList()
}



// Bonus
function deleteTodo(id) {

    const item = todos.find(i => i.id == id)
   
    todos = todos.filter(todo => todo != item)
    renderList();
  
}




