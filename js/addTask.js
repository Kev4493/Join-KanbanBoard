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

    console.log('All Tasks: ', allTasks)

    closeAddTaskDialog();
}