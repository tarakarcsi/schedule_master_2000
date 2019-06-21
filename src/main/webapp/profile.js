
let usersButtonEl;
function onProfileLoad(user) {
    usersButtonEl = document.getElementById('users-button');
    clearMessages();

    const userNameSpanEl = document.getElementById('user-name');
    userNameSpanEl.textContent = user.getName();
}

function onUserInfoLoad() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onUserInfoResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('GET', 'user');
    xhr.send();
}

function displayUserInfo(user) {
    const userNameEl = document.createElement('p');
    const userEmailEl = document.createElement('p');

    userNameEl.textContent = "Name:    " + user.name;
    userEmailEl.textContent = "E-mail:    " + user.email;

    const userDivEl = document.querySelector('.modal-body');
    removeAllChildren(userDivEl);
    userDivEl.appendChild(userNameEl);
    userDivEl.appendChild(userEmailEl);
}

function onUserInfoResponse() {
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
        displayUserInfo(text);

    // }else {
    //     onOtherResponse(, this);  
    }
}