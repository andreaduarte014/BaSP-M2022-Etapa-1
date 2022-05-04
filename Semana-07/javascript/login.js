//function for login button with alerts
// rose@radiumrocket.com
// BaSP2022
function login () {
    if (emailBlur() && passwordBlur()){
        var email = document.getElementsByName("Email")[0].value;
        var password = document.getElementsByName("Password")[0].value;
        var modal = document.getElementById("myModal");
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + password)
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            alert(data.msg)
        })
        .catch(function(error){
            alert(error.msg);
        })
    } else {
        var message = '';
        if (!emailBlur()){
            message = message + document.getElementsByClassName("login-email-error")[0].textContent + '\n';
        }
        if (!passwordBlur()){
            message = message + document.getElementsByClassName("login-password-error")[0].textContent + '\n';
        }
        alert(message);
    }
}
// forgot password button alerts
function forgotPasswordAlert() {
    alert('A new password was sent to your email.');
    window.location.reload();
}
//login email validation function
function emailBlur () {
    var email = document.getElementsByName("Email")[0].value;
    if (email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        return true
    } else {
        document.getElementsByClassName("login-email-error")[0].style.visibility = "visible";
    }
}
function emailFocus () {
    document.getElementsByClassName("login-email-error")[0].style.visibility = "hidden";
}
//login password validation function
function passwordBlur () {
    var hasLetters = false;
    var hasNumbers = false;
    var password = document.getElementsByName("Password")[0].value; 
    var i = 0;
    while (i < password.length && (!hasLetters || !hasNumbers)) {
        if (password[i].match(/[a-z]/i)) {
            hasLetters = true;
        } else if (password[i] >= '0' && password[i] <= '9') {
            hasNumbers = true;
        }
        i++;
    }
    if (!(hasLetters && hasNumbers)) {
        document.getElementsByClassName("login-password-error")[0].style.visibility = "visible";
    } else {
        return true;
    }
}
function passwordFocus () {
    document.getElementsByClassName("login-password-error")[0].style.visibility = "hidden";
}