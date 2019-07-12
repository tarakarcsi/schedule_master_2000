let taskTableBodyEl;
let taskTableEl;



function onCreateTaskButtonClicked() {
    const createTaskDivEl = document.getElementById('task-parameters');

    const titleInputEl = createTaskDivEl.querySelector('input[name = "task-title"]');
    const textSelectEl = document.querySelector('textarea[name = "task-textarea"]');

    const title = titleInputEl.value;
    const text = textSelectEl.value;

    const params = new URLSearchParams();
    params.append('title', title);
    params.append('text', text);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onCreateTaskResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('POST', 'createTask');
    xhr.send(params);
}

function onTaskLoad() {
    taskTableEl = document.getElementById('task-table-id');
    taskTableBodyEl = taskTableEl.querySelector('tbody');

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onTaskResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('GET', 'createTask');
    xhr.send();

    showContents(['main', 'task-editor', 'task-parameters']);
}

function displayTasks(taskList) {
    removeAllChildren(taskTableBodyEl);
    for(let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const taskTitleEl = document.createElement('td');
        taskTitleEl.textContent = task.title;

        taskTitleEl.setAttribute('draggable', 'true');          //
        taskTitleEl.setAttribute('ondragstart', 'drag(event)'); // drag@drop needed attributes
        taskTitleEl.setAttribute('id', task.title);             //

        const trEl = document.createElement('tr');
        trEl.appendChild(taskTitleEl);
        trEl.setAttribute('draggable', 'true');
        trEl.setAttribute('ondragstart', 'drag(event)');

        taskTableBodyEl.appendChild(trEl);
    }
}

function appendTaskToTaskList(task){
    const taskTitleEl = document.createElement('td');

    taskTitleEl.textContent = task.title;

    taskTitleEl.setAttribute('draggable', 'true');          //
    taskTitleEl.setAttribute('ondragstart', 'drag(event)'); // drag@drop needed attributes
    taskTitleEl.setAttribute('id', task.title);             //

    const trEl = document.createElement('tr');
    trEl.appendChild(taskTitleEl);
    trEl.setAttribute('draggable', 'true');
    trEl.setAttribute('ondragstart', 'drag(event)');

    taskTableBodyEl.appendChild(trEl);
}

function appendTasks(tasks) {
    removeAllChildren(taskTableBodyEl);

    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i];
        appendTaskToTaskList(task);
    }
}

function onTaskResponse(){
    //clearMessages();
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        displayTasks(text);
        appendTasks(text);
    }else {
        onOtherResponse(submitTaskButtonEl, this);
    }
}

function onCreateTaskResponse(){
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        onTaskLoad(text);
    }else {
        onOtherResponse(submitScheduleButtonEl, this);  
    }
}

function taskCreatedAlert() {
    alert("Task created successfully!");
}
