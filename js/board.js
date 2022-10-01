function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};








// function showTaskInBoard() {
//     let taskContainer = document.getElementById('taskContainer');

//     taskContainer.innerHTML = '';

//     for (let i = 0; i < allTasksInBoard.length; i++) {
//         taskContainer.innerHTML += /*html*/ `
//         <div class="task">
//             <div class="category-container">
//                 <p>${allTasksInBoard[i].category}</p>
//             </div>
//             <div class="title-container">
//                 <p>${allTasksInBoard[i].title}</p>
//             </div>
//             <div class="description-container">
//                 <p>${allTasksInBoard[i].description}</p>
//             </div>
//         </div>
//     `; 
//     }
// }