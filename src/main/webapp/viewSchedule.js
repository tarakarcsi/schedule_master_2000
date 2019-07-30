let mainDivEl;
let newDivEl;

function createScheduleTable() {
    const tableEl = document.getElementById('view-schedule-table');
    removeAllChildren(tableEl);
    const head = document.createElement('div');
    head.textContent =  "Hours";
    newDivEl = document.createElement('div');
    timeDiv(tableEl);


    for(let h = 0; h< 7; h++) {
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
   showContents(['view-schedule','main']);
}
