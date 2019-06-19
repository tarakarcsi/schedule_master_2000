function onCreateButtonClicked() {
    const createSceduleDivEl = document.getElementById('schedule-parameters');

    const titleInputEl = createSceduleDivEl.querySelector('input[name = "schedule-title"]');
    const daysSelectEl = document.getElementById('schedule-days-list');
    const publishedStatusSelectEl = document.getElementById('published-status');

    const title = titleInputEl.value;
    const days = daysSelectEl.value;
    const publishedStatus = publishedStatusSelectEl.value;

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
    }else {
        onOtherResponse(submitScheduleButtonEl, this);  
    }
}
function onScheduleLoad() {
    showContents(['main', 'schedule-editor']);
}

