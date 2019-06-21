let scheduleTableEl;
let scheduleTableBodyEl;


function onCreateButtonClicked() {
    const createSceduleDivEl = document.getElementById('schedule-parameters');

    const titleInputEl = createSceduleDivEl.querySelector('input[name = "schedule-title"]');
    const daysSelectEl = document.getElementById('schedule-days-list');
    const publishedStatusSelectEl = document.getElementById('published-status');

    const title = titleInputEl.value;
    const publishedStatus = publishedStatusSelectEl.value;
    const days = $('#schedule-days-list').val(); // visszaad egy listát, benne az option-ökkel


    const params = new URLSearchParams();
    params.append('title', title);
    params.append('days', days);
    params.append('publishedStatus', publishedStatus);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onCreateScheduleResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('POST', 'createSchedule');
    xhr.send(params);
}

function scheduleCreatedAlert() {
    alert("Schedule created successfully!");
}

function onCreateScheduleResponse(){  
    //clearMessages();
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        onScheduleLoad(JSON.parse(this.responseText));
    }else {
        onOtherResponse(submitScheduleButtonEl, this);  
    }
}
function onScheduleLoad() {
    scheduleTableEl = document.getElementById('schedule-table-id');
    scheduleTableBodyEl = scheduleTableEl.querySelector('tbody');

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onScheduleResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('GET', 'createSchedule');
    xhr.send();

    showContents(['main', 'schedule-editor']);

    //appendScheduleToScheduleList(schedules); ez nem jó ide
}

function onScheduleResponse(){
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        displaySchedules(text);
        appendSchedules(text);
    }else {
        onOtherResponse(submitScheduleButtonEl, this);  
    }
}

function displaySchedules(scheduleList) {
    for(let i = 0; i < scheduleList.length; i++){
        const schedule = scheduleList[i];
        const scheduleTitleEl = document.createElement('td');
        scheduleTitleEl.textContent = schedule.title;

        scheduleTitleEl.setAttribute('draggable', 'true');          //
        scheduleTitleEl.setAttribute('ondragstart', 'drag(event)'); // drag@drop needed attributes
        scheduleTitleEl.setAttribute('id', schedule.title);         //

        const trEl = document.createElement('tr');
        trEl.appendChild(scheduleTitleEl);
        trEl.setAttribute('draggable', 'true');
        trEl.setAttribute('ondragstart', 'drag(event)');

        scheduleTableBodyEl.appendChild(trEl);
    }
}

function appendScheduleToScheduleList(schedule)  { // append one schedule to list
    const scheduleTitleEl = document.createElement('td');

    scheduleTitleEl.textContent = schedule.title;
    scheduleTitleEl.setAttribute('draggable', 'true');
    scheduleTitleEl.setAttribute('ondragstart', 'drag(event)');
    scheduleTitleEl.setAttribute('id', schedule.title);


    const trEl = document.createElement('tr');
    trEl.appendChild(scheduleTitleEl);
    trEl.setAttribute('draggable', 'true');
    trEl.setAttribute('ondragstart', 'drag(event)');
    scheduleTableBodyEl.appendChild(trEl);
}

function appendSchedules(schedules) { // extending the schedule list

    removeAllChildren(scheduleTableBodyEl);

    for(let i = 0; i < schedules.length; i++) {
        const schedule = schedules[i];
        appendScheduleToScheduleList(schedule);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data)).style.display = "none";
}



