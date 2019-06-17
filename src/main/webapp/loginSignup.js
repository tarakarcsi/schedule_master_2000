function onLoginResponse() {
    if (this.status === OK) {
        const user = JSON.parse(this.responseText);
        setAuthorization(user);
        onProfileLoad(user);
    } else {
        onOtherResponse(loginContentDivEl, this);
    }
}

function onRegisterResponse(){
    //clearMessages(); 
    if (this.status === OK) {
        const text = JSON.parse(this.responseText);
    }else {
        onOtherResponse(registerContentDivEl, this);
    }
}

function onLoginButtonClicked() {
    const loginDivEl = document.getElementById('login');

    const emailInputEl = loginDivEl.querySelector('input[name="email"]');
    const passwordInputEl = loginDivEl.querySelector('input[name="password"]');

    const email = emailInputEl.value;
    const password = passwordInputEl.value;

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoginResponse);
    xhr.addEventListener('error', onNetworkError);
    xhr.open('POST', 'login');
    xhr.send(params);
}

function onRegisterButtonClicked() {
    const registerDivEl = document.getElementById('register');

    const emailInputEl = registerDivEl.querySelector('input[name = "email"]');
    const nameInputEl = registerDivEl.querySelector('input[name = "name"]');
    const passwordInputEl = registerDivEl.querySelector('input[name = "password"]');

    const email = emailInputEl.value;
    const password = passwordInputEl.value;
    const name = nameInputEl.value;

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('name', name);
    params.append('password', password);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onRegisterResponse);
    xhr.addEventListener('error', onNetworkError);

    xhr.open('POST', 'register');
    xhr.send(params);

}

$(function(){
    $('input').on('focusout', function(){
        if($(this).val().length > 0) {
            $(this).addClass('has-value');
        }
        else {
            $(this).removeClass('has-value');
        }
    });
});



