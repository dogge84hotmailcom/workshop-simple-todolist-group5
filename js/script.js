// 1. DOM referenser
const todoList = document.getElementById("todos");



// 2. Eventlyssnare - När ett formulär submittas anropa funktion addTodo()





// 3. Börja med en tom array på todos
// samt ett id som börjar på noll





// 4. Lägg till en Todo som ett objekt  i arrayen todos
function addTodo() {

    
}



// 5. Funktion som renderar listan på index.html varje gång listan förändraas
function renderList() {

    // Iterera genom varje list-element och skapa en <li></li> med todo-texten, samt en close-knapp

}




// BONUS! Uppdatera eller ta bort en Todo. Använd er av s.k event delegation
todoList.addEventListener('click', function(event) {
        // Element som klickades på i listan
        console.log(event.target);

        // Om man texten klickas => anropa toggleTodoCompletion

        // Eller om close-knappen klickas => anrop deleteTOto

});


// Bonus! Uppdatera en todo med visst id. Toggle "completed"
function toggleTodoCompletion(id) {


}



// Bonus
function deleteTodo(id) {
  
}




