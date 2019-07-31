let newDivEl;

function createScheduleTable() {
    const tableEl = document.getElementById('view-schedule-table');
    removeAllChildren(tableEl);
    const head = document.createElement('div');
    head.textContent =  "Hours";
    newDivEl = document.createElement('div');
    timeDiv(tableEl);


    for(let h = 0; h < 7; h++) {
        newDivEl = document.createElement('div');

        newDivEl.setAttribute('class', 'column');

        for(let i = 0; i <= 24; i++) {

            let tableDataEl = document.createElement('div');
            tableDataEl.className = "slots";
            tableDataEl.setAttribute('id',(h+"|" + i).toString());
            if(i === 0){
                tableDataEl.textContent = h+1;
                newDivEl.appendChild(tableDataEl);
                tableEl.append(newDivEl);
            }else{
                newDivEl.appendChild(tableDataEl);
                tableEl.append(newDivEl);
            }
        }
    }

}

function timeDiv(divToAppend){

    for(let i = 0; i <= 24; i++) {

        const tableDataEl = document.createElement('div');
        tableDataEl.className = "time";
        if(i === 0 ){
            tableDataEl.textContent = " ";

        }else{
            tableDataEl.textContent = i-1 + '-' + (i);
        }
        newDivEl.appendChild(tableDataEl);
        divToAppend.append(newDivEl);
    }
}



function onViewScheduleButtonClicked() {
    createScheduleTable();
    onScheduleViewLoad();
    onTaskViewLoad();
    showContents(['view-schedule','main']);
}

//-----------------------------------------------------------------------------------
function onScheduleViewLoad() {
    if(scheduleTableBodyEl != null){
        removeAllChildren(scheduleTableBodyEl);
    }

    scheduleTableEl = document.getElementById('schedule-table-id2');
    scheduleTableBodyEl = scheduleTableEl.querySelector('tbody');

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onScheduleViewResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('GET', 'createSchedule');
    xhr.send();

    showContents(['main', 'view-schedule']);

    //appendScheduleToScheduleList(schedules); ez nem jó ide
}

function onScheduleViewResponse(){
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        displayViewSchedules(text);
        appendSchedules(text);
    }else {
        onOtherResponse(submitScheduleButtonEl, this);
    }
}

function displayViewSchedules(scheduleList) {
    /*const removableEl = document.getElementById('schedule-table-id');*/

    for(let i = 0; i < scheduleList.length; i++){
        const schedule = scheduleList[i];
        const scheduleTitleEl = document.createElement('td');
        scheduleTitleEl.textContent = schedule.title;
        scheduleTitleEl.setAttribute('id', schedule.title);         //

        const trEl = document.createElement('tr');
        trEl.appendChild(scheduleTitleEl);

        scheduleTableBodyEl.appendChild(trEl);
    }
}

function appendScheduleViewToScheduleList(schedule)  { // append one schedule to list
    const scheduleTitleEl = document.createElement('td');

    scheduleTitleEl.textContent = schedule.title;
    scheduleTitleEl.setAttribute('id', schedule.title);


    const trEl = document.createElement('tr');
    trEl.appendChild(scheduleTitleEl);
    scheduleTableBodyEl.appendChild(trEl);
}

function appendSchedules(schedules) { // extending the schedule list

    removeAllChildren(scheduleTableBodyEl);

    for(let i = 0; i < schedules.length; i++) {
        const schedule = schedules[i];
        appendScheduleViewToScheduleList(schedule);
    }
}

//----------------------------------------------------------------------

function onTaskViewLoad() {
    if(taskTableBodyEl != null){
        removeAllChildren(taskTableBodyEl);
    }

    taskTableEl = document.getElementById('task-table-id2');
    taskTableBodyEl = taskTableEl.querySelector('tbody');

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onTaskViewResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('GET', 'createTask');
    xhr.send();

    showContents(['main', 'task-parameters']);
}

function onTaskViewResponse(){
    //clearMessages();
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
          appendViewTasks(text);
    }else {
        onOtherResponse(submitTaskButtonEl, this);
    }
}

function appendViewTasks(tasks) {
    removeAllChildren(taskTableBodyEl);

    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i];
        appendViewTaskToTaskList(task);
    }
}


function appendViewTaskToTaskList(task){
    const taskTitleEl = document.createElement('td');

    taskTitleEl.textContent = task.title;
    taskTitleEl.setAttribute('id', task.title);

    const trEl = document.createElement('tr');
    trEl.appendChild(taskTitleEl);

    taskTableBodyEl.appendChild(trEl);
}
