window.addEventListener('DOMContentLoaded', (event) => {
    var icon = document.querySelector('#list-logo');
    var userInfo = document.querySelector('#modali');
    var closeButton = document.querySelector('.close-button');

        icon.addEventListener('click', function (event) {
            if (userInfo.style.display == "") {
                userInfo.style.display = "none";
            } else {
                userInfo.style.display = "";
            }
        });

        closeButton.addEventListener('click', function (event) {
            if (userInfo.style.display == "") {
                userInfo.style.display = "none";
            }
        });
    });








