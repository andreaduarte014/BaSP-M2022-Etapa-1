// signup name and surname validation
function nameBlur(name,className) {
    var namee=document.getElementsByName(name)[0].value;
    var i=0;
    var j=0;
    var k=0
    for (i in namee){
    if (namee[i].match(/[a-z]/i)){
            j++
    } else {
        k++
    }
    i++
    }
    if (j>=3 && k==0){
        return true
    }else {
        document.getElementsByClassName(className)[0].style.visibility="visible";
    }
}
function nameFocus(className) {
    document.getElementsByClassName(className)[0].style.visibility="hidden";
}
//signup dni
function dniBlur() {
    var dni=document.getElementsByName('dni')[0].value;
    var i=0;
    var j=0;
    var k=0;
    for (i in dni){
        if (dni[i]>=0 && dni[i]<=9){
            j++
        } else {
            k++
        }
     i++
    }
    if (j>=7 && k==0){
        return true
    } else {
        document.getElementsByClassName('signup-dni-error')[0].style.visibility="visible";
    }
}
function dniFocus() {
    document.getElementsByClassName('signup-dni-error')[0].style.visibility="hidden";
}
// signup date of birth validation
function dateBlur() {
    var day= new Date()
    var date = document.getElementsByName('birth')[0].value;
    if (day < new Date(date) || date == ''){
        document.getElementsByClassName('signup-date-error')[0].style.visibility="visible";
    } else {
        document.getElementsByClassName('signup-date-error')[0].style.visibility="hidden";
        return true;
    }
}
function dateFocus() {
    document.getElementsByClassName('signup-date-error')[0].style.visibility="hidden";
}
//signup telephone validation
function telBlur() {
    var telephone=document.getElementsByName('telephone')[0].value;
    var i=0;
    var j=0;
    var k=0;
    for (i in telephone){
        if (telephone[i]>=0 && telephone[i]<=9){
            j++
        } else {
            k++
        }
     i++
    }
    if (j==10 && k==0){
        return true
    } else {
        document.getElementsByClassName('signup-telephone-error')[0].style.visibility="visible";
    }
}
function telFocus() {
    document.getElementsByClassName('signup-telephone-error')[0].style.visibility="hidden"
}
// signup address validation 
// at least 5 characters with numbers,letters and a space between them.
function addressBlur() {
    var address=document.getElementsByName('address')[0].value;
    var hasLetters = false;
    var hasNumbers = false;
    var hasSpace = false;
    var i = 0;
    for(i in address) {
        if (address[i].match(/[a-z]/i)) {
            hasLetters = true;
        } else if (address[i] >= '0' && address[i] <= '9') {
            hasNumbers = true;
        } else if (address[i] == ' ') {
            hasSpace = true;
        }
    }
    if (hasLetters && hasNumbers && hasSpace && address.length >=5){
        document.getElementsByClassName("signup-address-error")[0].style.visibility = "hidden";
        return true;
    } else {
        document.getElementsByClassName("signup-address-error")[0].style.visibility = "visible";
    }
}
function addressFocus() {
    document.getElementsByClassName("signup-address-error")[0].style.visibility = "hidden"; 
}
// alfanumeric text with at least 3 leters.
function cityBlur() {
    var city = document.getElementsByName('city')[0].value;
    var hasLetters = false;
    var hasNumbers = false;
    var i = 0;
    for(i in city) {
        if (city[i].match(/[a-z]/i)) {
            hasLetters = true;
        } else if (city[i] >= '0' && city[i] <= '9') {
            hasNumbers = true;
        }
    }
    if ((hasLetters || hasNumbers) && city.length >=3) {
        document.getElementsByClassName("signup-city-error")[0].style.visibility = "hidden";
        return true;
    } else {
        document.getElementsByClassName("signup-city-error")[0].style.visibility = "visible";
    }
}
function cityFocus () {
    document.getElementsByClassName("signup-city-error")[0].style.visibility = "hidden";
}
// signup postal code validation
function codeBlur() {
    var code=document.getElementsByName('postal code')[0].value;
    var i=0;
    var j=0;
    var k=0;
    for (i in code){
        if (code[i]>=0 && code[i]<=9){
            j++
        } else {
            k++
        }
    i++
    }
    if ((j>=4) && (j<=5) && k==0){
        return true
    } else {
        document.getElementsByClassName('signup-code-error')[0].style.visibility="visible";
    }
}
function codeFocus() {
    document.getElementsByClassName('signup-code-error')[0].style.visibility="hidden";
}
//signup email validation
function emailBlur () {
    var email = document.getElementsByName("Email")[0].value;
    if (email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        return true
    } else {
        document.getElementsByClassName("signup-email-error")[0].style.visibility = "visible";
    }
}
function emailFocus () {
    document.getElementsByClassName("signup-email-error")[0].style.visibility = "hidden";
}
//signup password validation
function pwBlur () {
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
        document.getElementsByClassName("signup-password-error")[0].style.visibility = "visible";
    } else {
    return true;
    }
}
function pwFocus () {
    document.getElementsByClassName("signup-password-error")[0].style.visibility = "hidden";
}
//signup confirm password validation
function confirmationBlur(){
    var confirmation=document.getElementsByName('confirmation')[0].value;
    var password = document.getElementsByName("Password")[0].value;
    if (confirmation == password && password != ''){
        document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "hidden";
        return true;
    } else {
        document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "visible";
    }
}
function confirmationFocus() {
    document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "hidden";  
}
//function for signup button with alerts
//function for signup button with alerts
function signup () {
    if (emailBlur() && pwBlur() && confirmationBlur() && codeBlur() && cityBlur() && addressBlur()
        && telBlur() && dateBlur() && dniBlur() && nameBlur('name', 'signup-name-error') && nameBlur('surname','signup-surname-error')){
        var email = document.getElementsByName("Email")[0].value;
        var password = document.getElementsByName("Password")[0].value;
        var code = document.getElementsByName('postal code')[0].value;
        var namee = document.getElementsByName('name')[0].value;
        var surname = document.getElementsByName('surname')[0].value;
        var dni = document.getElementsByName('dni')[0].value;
        var date = document.getElementsByName('birth')[0].value;
        var telephone = document.getElementsByName('telephone')[0].value;
        var address = document.getElementsByName('address')[0].value;
        var city = document.getElementsByName('city')[0].value;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('name', namee);
        localStorage.setItem('zip', code);
        localStorage.setItem('surname', surname);
        localStorage.setItem('dni', dni);
        localStorage.setItem('date', date);
        localStorage.setItem('telephone', telephone);
        localStorage.setItem('address', address);
        localStorage.setItem('city', city);
        // date format convertion from YYYY-MM-DD to MM/DD/YYYY
        var year = date.substring(0,4);
        var month = date.substring(5,7);
        var day = date.substring(8,10);
        date = month + '/' + day + '/' + year;
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + namee 
        + '&lastName=' + surname
        + '&dni=' + dni
        + '&dob=' + date
        + '&phone=' + telephone
        + '&address=' + address
        + '&city=' + city
        + '&zip=' + code
        + '&email=' + email
        + '&password=' + password
        )
        .then(function(data){
        return data.json()})
        .then(function(data){
        alert(data.msg)})
        .catch(function(data){
        alert(data.msg);
        })
        alert('Name: ' + namee + '\n' + 'Surname: ' + surname + '\n' + 'DNI: ' + dni + '\n' + 'Date of birth: ' + date +'\n' + 'Telephone number: ' + telephone
        + '\n' + 'Adress: ' + address + '\n' + 'City: ' + city + '\n' + 'Postal code: ' + code + '\n' + 'Email: ' + email +'\n' + 'Password: ' + password);
    } else {
        var message = '';
        if (!emailBlur()){
            message = message + document.getElementsByClassName("signup-email-error")[0].textContent + '\n';
        }
        if (!pwBlur()){
            message = message + document.getElementsByClassName("signup-password-error")[0].textContent + '\n';
        }
        if (!confirmationBlur()){
            message = message + document.getElementsByClassName("signup-confirmation-error")[0].textContent + '\n';
        }
        if (!codeBlur()){
            message = message + document.getElementsByClassName("signup-code-error")[0].textContent + '\n';
        }
        if (!cityBlur()){
            message = message + document.getElementsByClassName("signup-city-error")[0].textContent + '\n';
        }
        if (!addressBlur()){
            message = message + document.getElementsByClassName("signup-address-error")[0].textContent + '\n';
        }
        if (!telBlur()){
            message = message + document.getElementsByClassName("signup-telephone-error")[0].textContent + '\n';
        }
        if (!dateBlur()){
            message = message + document.getElementsByClassName("signup-date-error")[0].textContent + '\n';
        }
        if (!dniBlur()){
            message = message + document.getElementsByClassName("signup-dni-error")[0].textContent + '\n';
        }
        if (!nameBlur('name', 'signup-name-error')){
            message = message + document.getElementsByClassName("signup-name-error")[0].textContent + '\n';
        }
        if (!nameBlur('surname','signup-surname-error')){
            message = message + document.getElementsByClassName("signup-surname-error")[0].textContent + '\n';
        }
        alert(message);
    }
}
function validateLocalStorage() {
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');
    var name = localStorage.getItem('name');
    var zip = localStorage.getItem('zip');
    var surname = localStorage.getItem('surname');
    var dni = localStorage.getItem('dni');
    var date = localStorage.getItem('date');
    var phone = localStorage.getItem('telephone');
    var address = localStorage.getItem('address');
    var city = localStorage.getItem('city');
    if (
        email &&
        password &&
        name &&
        zip &&
        surname &&
        dni &&
        date &&
        phone &&
        address &&
        city) {
        document.getElementsByName('name')[0].value = name;
        document.getElementsByName('surname')[0].value = surname;
        document.getElementsByName('dni')[0].value = dni;
        document.getElementsByName('birth')[0].value = date;
        document.getElementsByName('telephone')[0].value = phone;
        document.getElementsByName('address')[0].value = address;
        document.getElementsByName('city')[0].value = city;
        document.getElementsByName('postal code')[0].value = zip;
        document.getElementsByName('Email')[0].value = email;
        document.getElementsByName('Password')[0].value = password;
        document.getElementsByName('confirmation')[0].value = password;
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    validateLocalStorage()
});