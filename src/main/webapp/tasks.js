let taskTableBodyEl;
let taskTableEl;
let activeTask;



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



function appendTaskToTaskList(task){
    const taskTitleEl = document.createElement('td');

    const modifyIcon = document.createElement('img');
    modifyIcon.setAttribute('src', "https://cdn0.iconfinder.com/data/icons/basic-line-5/1024/edit-512.png");
    modifyIcon.setAttribute('height', '25px');
    modifyIcon.setAttribute('align', 'right');
    modifyIcon.addEventListener('click',()=>{onTaskModifyButtonClicked(task)} );

    taskTitleEl.textContent = task.title;

    taskTitleEl.setAttribute('draggable', 'true');          //
    taskTitleEl.setAttribute('ondragstart', 'drag(event)'); // drag@drop needed attributes
    taskTitleEl.setAttribute('id', task.id);

    const trEl = document.createElement('tr');
    trEl.appendChild(taskTitleEl);
    taskTitleEl.appendChild(modifyIcon);
    trEl.setAttribute('draggable', 'true');
    trEl.setAttribute('ondragstart', 'drag(event)');
    modifyIcon.addEventListener('click', ()=>{onTaskModifyButtonClicked(task)});

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
        //displayTasks(text);
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

function onTaskModifyButtonClicked(task) {
    showContents(['main', 'task-editor', 'task-modifier']);
    const EltaskTitle = document.getElementById('task-modifier-title');
    const EltaskContent = document.getElementById('exampleFormControlTextarea');
    EltaskTitle.setAttribute('value',task.title);
    EltaskContent.value = task.content;
    activeTask=task;

}


function sendTaskModify() {
    const EltaskTitle = document.getElementById('task-modifier-title');
    const EltaskContent = document.getElementById('exampleFormControlTextarea');

    const xhr = new XMLHttpRequest();
    const url = new URLSearchParams();
    url.append('taskId',activeTask.id);
    url.append('title',EltaskTitle.value);
    url.append('text',EltaskContent.value);
    xhr.addEventListener('error', onNetworkError);
    xhr.addEventListener('load',onTaskLoad);
    xhr.open('POST', 'taskModifier');
    xhr.send(url);

}

