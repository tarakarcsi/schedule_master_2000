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

        function displayUserInfo(user) {
            const userNameEl = document.createElement('p');
            const userEmailEl = document.createElement('p');

            userNameEl.textContent = "Name:    " + user.name;
            userEmailEl.textContent = "E-mail:    " + user.email;

            const userDivEl = document.querySelector('.modal-body');
            userDivEl.appendChild(userNameEl);
            userDivEl.appendChild(userEmailEl);
        }

        function onUserInfoLoad() {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', );
            xhr.addEventListener('error', onNetworkError);

            xhr.open('GET', 'user');
            xhr.send();

        }

        function onUserInfoResponse() {
            if (this.status === OK) {
                const text = JSON.parse(this.responseText);
                displayUserInfo(text);
            // }else {
            //     onOtherResponse(, this);  
            }
        }
    });








