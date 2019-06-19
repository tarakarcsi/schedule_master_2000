function onTaskLoad() {
    showContents(['main', 'task-editor']);
}

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

function onCreateTaskResponse(){
    //clearMessages();
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
    }else {
        onOtherResponse(submitTaskButtonEl, this);
    }
}

