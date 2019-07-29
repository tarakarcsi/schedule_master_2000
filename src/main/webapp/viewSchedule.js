let mainDivEl;

function onViewScheduleClicked() {
    showContents(['main','view-schedule-schedules']);
}



function createScheduleTable() {
    const tableEl = document.createElement('table');
    tableEl.setAttribute('id', 'view-table');

    const tablefirstHeadRowEl = document.createElement('tr');
    const tablefirstHeadEl = document.createElement('th');
    tablefirstHeadEl.textContent = "Hours";

    tablefirstHeadRowEl.appendChild(tablefirstHeadEl);
    const tableHourEl = document.createElement('tr');

    for(let i = 0; i <= 23; i++) {

        const tableDataEl = document.createElement('td');
        tableDataEl.textContent = i + '-' + (i+1);
        tableHourEl.appendChild(tableDataEl);
    }
    tableEl.appendChild(tablefirstHeadRowEl);
    tableEl.appendChild(tableHourEl);
    mainDivEl.appendChild(tableEl);

}

// majd ezt holnap  átrakom a mainbe

//function onLoad() {
//    mainDivEl = document.getElementById('view-schedule-table');
//
//    const clickButton = document.getElementById('norm-button');
//    clickButton.addEventListener('click', createScheduleTable);
//
//}
//
//document.addEventListener('DOMContentLoaded', onLoad);
