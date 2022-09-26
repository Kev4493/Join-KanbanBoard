function addTask() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    console.log('Title: ', taskTitle)
    console.log('Description: ', taskDescription)
    console.log('Category: ', taskCategory)
    console.log('Assigned To: ', taskAssignedTo)
    console.log('Due Date: ', taskDueDate)

    closeAddTaskDialog();
}