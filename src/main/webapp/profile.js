
let usersButtonEl;
function onProfileLoad(user) {
    usersButtonEl = document.getElementById('users-button');
    clearMessages();

    const userNameSpanEl = document.getElementById('user-name');
    userNameSpanEl.textContent = user.getName;


}
