function onCreateButtonClicked() {
    const createSceduleDivEl = document.getElementById('schedule-creator'); //ÁTÍRNI A JSP-BEN AZ ID-T

    const titleInputEl = createSceduleDivEl.querySelector('input[name = "schedule-title"]');
    const daysSelectEl = createSceduleDivEl.querySelector('input[name = "days"]');
    const publishedStatusSelectEl = createSceduleDivEl.querySelector('input[name = "published-status"]');

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

    xhr.open('POST', 'create');
    xhr.send(params);
}

function onCreateScheduleResponse(){  //MÉG NINCS ÁTÍRVA!!!!!!!!!!!!!!
    //clearMessages();
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
    }else {
        onOtherResponse(createScheduleContentDivEl, this);  
    }
}
