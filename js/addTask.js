let allTasks = [];

function addTask() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    let task = {
        'title': taskTitle,
        'description': taskDescription,
        'category': taskCategory,
        'assigned': taskAssignedTo,
        'dueDate': taskDueDate,
        'createdAt': new Date().getTime()
    }

    allTasks.push(task);
    backend.setItem('allTasks', JSON.stringify(allTasks));


    console.log('AllTasks: ', allTasks);
};












// function showTaskInBoard() {
//     let taskContainer = document.getElementById('taskContainer');

//     taskContainer.innerHTML = '';

//     for (let i = 0; i < allTasks.length; i++) {
//         taskContainer.innerHTML += /*html*/ `
//         <div class="task">
//             <p>${allTasks[i].title}</p>
//         </div>
//     `; 
//     }
// }