const OK = 200;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

let loginContentDivEl;
let profileContentDivEl;
let logoutContentDivEl;
let registerContentDivEl;
let createScheduleContentDivEl;
let scheduleEditorDivEl;
let taskEditorDivEl;

function newInfo(targetEl, message) {
    newMessage(targetEl, 'info', message);
}

function newError(targetEl, message) {
    newMessage(targetEl, 'error', message);
}

function newMessage(targetEl, cssClass, message) {
    clearMessages();

    const pEl = document.createElement('p');
    pEl.classList.add('message');
    pEl.classList.add(cssClass);
    pEl.textContent = message;

    targetEl.appendChild(pEl);
}

function clearMessages() {
    const messageEls = document.getElementsByClassName('message');
    for (let i = 0; i < messageEls.length; i++) {
        const messageEl = messageEls[i];
        messageEl.remove();
    }
}

function showContents(ids) {
    const contentEls = document.getElementsByClassName('content');
    for (let i = 0; i < contentEls.length; i++) {
        const contentEl = contentEls[i];
        if (ids.includes(contentEl.id)) {
            contentEl.classList.remove('hidden');
        } else {
            contentEl.classList.add('hidden');
        }
    }
}

function removeAllChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function onNetworkError(response) {
    document.body.remove();
    const bodyEl = document.createElement('body');
    document.appendChild(bodyEl);
    newError(bodyEl, 'Network error, please try reloaing the page');
}

function onOtherResponse(targetEl, xhr) {
    if (xhr.status === NOT_FOUND) {
        newError(targetEl, 'Not found');
        console.error(xhr);
    } else {
        const json = JSON.parse(xhr.responseText);
        if (xhr.status === INTERNAL_SERVER_ERROR) {
            newError(targetEl, `Server error: ${json.message}`);
        } else if (xhr.status === UNAUTHORIZED || xhr.status === BAD_REQUEST) {
            newError(targetEl, json.message);
        } else {
            newError(targetEl, `Unknown error: ${json.message}`);
        }
    }
}

function hasAuthorization() {
    return localStorage.getItem('user') !== null;
}

function setAuthorization(user) {
    return localStorage.setItem('user', JSON.stringify(user));
}

function getAuthorization() {
    return JSON.parse(localStorage.getItem('user'));
}

function setUnauthorized() {
    return localStorage.removeItem('user');
}

function onLoad() {
    registerContentDivEl = document.getElementById('register');
    loginContentDivEl = document.getElementById('container');
    submitScheduleButtonEl = document.getElementById('schedule-submit');
    scheduleEditorDivEl = document.getElementById('schedule-editor');
    taskEditorDivEl = document.getElementById('task-editor');
    submitTaskButtonEl = document.getElementById('task-submit');
    homeContentDivEl = document.getElementById('main');

    const loginButtonEl = document.getElementById('login-button');
    loginButtonEl.addEventListener('click', onLoginButtonClicked);

    const registerButtonEl = document.getElementById('register-button');
    registerButtonEl.addEventListener('click', onRegisterButtonClicked);
    
    const scheduleButtonEl = document.getElementById('nav-schedule-editor');
    scheduleButtonEl.addEventListener('click', onScheduleLoad);

    const taskButtonEl = document.getElementById('nav-task-editor');
    taskButtonEl.addEventListener('click', onTaskLoad);

    const logoutButtonEl = document.getElementById('nav-logout');
    logoutButtonEl.addEventListener('click', onLogoutLoad);

    const homeButtonEL = document.getElementById('nav-home');
    homeButtonEL.addEventListener('click', onLoginButtonClicked);

    const profileButtonEl = document.getElementById('list-logo');
    profileButtonEl.addEventListener('click', onUserInfoLoad);

    const modiButton = document.getElementById('task-modifier-submit');
    modiButton.addEventListener('click',()=>{sendTaskModify(activeTask)})

    submitScheduleButtonEl.addEventListener('click', onCreateButtonClicked);
    submitScheduleButtonEl.addEventListener('click', scheduleCreatedAlert);
    submitTaskButtonEl.addEventListener('click', taskCreatedAlert);
    submitTaskButtonEl.addEventListener('click', onCreateTaskButtonClicked);

}

document.addEventListener('DOMContentLoaded', onLoad);
