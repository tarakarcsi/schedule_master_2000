function showUserInfo(user){

}

function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onUsersReceived);
    xhr.open('GET', BASE_URL + '/users');
    xhr.send();
}

function onUsersReceived() {
    const text = this.responseText;
    const user = JSON.parse(text);
    const divEl = document.getElementById('profile-content');

}
