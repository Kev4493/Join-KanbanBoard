async function initBoard() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks(); // Es wird gewartet bis alles geladen ist.
    renderTasks(); // Dann wird gerendert.
}


function renderTasks() {
    let toDoCategory = allTasks.filter(t => t['status'] == 'todo');
    let toDoContainer = document.getElementById('todo-container');
    toDoContainer.innerHTML = '';

    for (let i = 0; i < toDoCategory.length; i++) {
        const element = toDoCategory[i];
        toDoContainer.innerHTML += generateTaskHtml(i, element, 'todo');
        // addColorOfCategory(element, i);
        // addColorOfAssigned(element, i);
    }


    let inProgressCategory = allTasks.filter(t => t['status'] == 'in-progress');
    let inProgressContainer = document.getElementById('in-progress-container');
    inProgressContainer.innerHTML = '';

    for (let i = 0; i < inProgressCategory.length; i++) {
        const element = inProgressCategory[i];
        inProgressContainer.innerHTML += generateTaskHtml(i, element, 'in-progress');
        // addColorOfCategory(element, i);
        // addColorOfAssigned(element, i);
    }


    let awaitingFeedbackCategory = allTasks.filter(t => t['status'] == 'awaiting-feedback');
    let awaitingFeedbackContainer = document.getElementById('awaiting-feedback-container');
    awaitingFeedbackContainer.innerHTML = '';

    for (let i = 0; i < awaitingFeedbackCategory.length; i++) {
        const element = awaitingFeedbackCategory[i];
        awaitingFeedbackContainer.innerHTML += generateTaskHtml(i, element, 'awaiting-feedback');
        // addColorOfCategory(element, i);
        // addColorOfAssigned(element, i);
    }


    let doneCategory = allTasks.filter(t => t['status'] == 'done');
    let doneContainer = document.getElementById('done-container');
    doneContainer.innerHTML = '';

    for (let i = 0; i < doneCategory.length; i++) {
        const element = doneCategory[i];
        doneContainer.innerHTML += generateTaskHtml(i, element, 'done');
        // addColorOfCategory(element, i);
        // addColorOfAssigned(element, i);
    }
}


function generateTaskHtml(i, element, status) {

    return /*html*/ `
        <div draggable="true" ondragstart="startDragging(${element['id']})" class="task">
            <div id="category-container${i}" class="category-container ${element['category']}">
                <p>${element['category']}</p>
            </div>
            <div class="title-container">
                <p>${element['title']}</p>
            </div>
            <div class="description-container">
                <p>${element['description']}</p>
            </div>
            <div class="card-footer">
                <div id="assigned-to-container${i}" class="assigned-to-container ${element['assigned']}" title="${element['assigned']}">
                    <!-- Mit folgender Syntax, lassen sich die Anfangsbuchstaben von einem String anzeigen: -->
                    ${element['assigned'].split(" ").map(word => word[0]).join("")}
                </div>
                <div class="prio-container"></div>
            </div>
            <div class="delete-container">
                <img class="trash-icon" onclick="deleteTask(${element.id})" src="../assets/icons/trash.png" alt="" title="Delete complete Task">
            </div>
        </div>
    `;
}


// === Drag and Drop: ===

let currentDraggedElement;

function startDragging(element) {
    currentDraggedElement = element;
}


async function moveTo(containerType) {
    let array = allTasks.find(t => t.id === currentDraggedElement)
    array['status'] = containerType;

    renderTasks();
    await saveAllTasks();
}


function allowDrop(ev) {
    ev.preventDefault(); // Das Standartverhalten des DIV Containers wird damit so verändert, dass man Elemente dort hineinwerfen kann.
}

// === === === === === ===


function addColorOfCategory(element, i) {
    if (element['category'] == 'Sales') {
        document.getElementById(`category-container${i}`).classList.add('bg-color-lightcoral');
    } else {
        if (element['category'] == 'Marketing') {
            document.getElementById(`category-container${i}`).classList.add('bg-color-cornflowerblue');
        } else {
            if (element['category'] == 'Design') {
                document.getElementById(`category-container${i}`).classList.add('bg-color-khaki');
            } else {
                if (element['category'] == 'Software-Development') {
                    document.getElementById(`category-container${i}`).classList.add('bg-color-lightgreen');
                }
            }
        }
    }
}


function addColorOfAssigned(element, i) {
    if (element['assigned'] == 'Kevin Wagner') {
        document.getElementById(`assigned-to-container${i}`).classList.add('bg-color-lightblue');
    } else {
        if (element['assigned'] == 'Kristian Huptas') {
            document.getElementById(`assigned-to-container${i}`).classList.add('bg-color-burlywood');
        }
    }
};


async function deleteTask(foo) {
    let id;
    allTasks.forEach((t, index) => {
        if(t.id === foo) id = index;
    });

    allTasks.splice(id, 1);
    renderTasks();
    await saveAllTasks();
}


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};