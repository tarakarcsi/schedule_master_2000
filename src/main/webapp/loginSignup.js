function onLoginResponse() {
    if (this.status === OK) {
        //const user = JSON.parse(this.responseText);
        showContents(['main']);
        // setAuthorization(user);
        // onProfileLoad(getAuthorization());
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
    const loginFormEl = document.forms['login-form'];

    const emailInputEl = loginFormEl.querySelector('input[name="email"]');
    const passwordInputEl = loginFormEl.querySelector('input[name="password"]');

    const email = emailInputEl.value;
    const password = passwordInputEl.value;

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoginResponse);
    xhr.addEventListener('error', onNetworkError);
    xhr.open('POST', 'login');
    console.log(params);
    xhr.send(params);
}

function onRegisterButtonClicked() {
    const registerFormEl = document.forms['register-form'];

    const emailInputEl = registerFormEl.querySelector('input[name = "email"]');
    const nameInputEl = registerFormEl.querySelector('input[name = "name"]');
    const passwordInputEl = registerFormEl.querySelector('input[name = "password"]');

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



