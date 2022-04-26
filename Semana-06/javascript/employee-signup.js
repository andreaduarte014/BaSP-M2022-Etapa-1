// signup name and surname validation
window.onload = function(){
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
    var date=document.getElementsByName('birth')[0].value;
    if (day < new Date(date)){
        return document.getElementsByClassName('signup-date-error')[0].style.visibility="visible";
    } else {
        return true
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
// signup adress validation 
//Al menos 5 caracteres con letras, números y un espacio en el medio.
function adressBlur() {
    var adress=document.getElementsByName('adress')[0].value;
    var hasLetters = false;
    var hasNumbers = false;
    var i = 0;
    while (i < adress.length && (!hasLetters || !hasNumbers)) {
    if (adress[i].match(/[a-z]/i)) {
    hasLetters = true;
    } else if (city[i] >= '0' && city[i] <= '9') {
    hasNumbers = true;
    }
    i++;
    }
    if (!(hasLetters && hasNumbers)){
        document.getElementsByClassName("signup-adress-error")[0].style.visibility = "visible";  
    } else {
        document.getElementsByClassName("signup-adress-error")[0].style.visibility = "hidden";
    }
}
function adressFocus() {
    document.getElementsByClassName("signup-adress-error")[0].style.visibility = "hidden"; 
}



// signup city validation
function countLetters(string) {
    var letters = 0;
    for (var i = 0; i < string.length; i++) {
      var element = string[i];
      if (isNaN(element)) {
        letters++;
      }
    }
    return letters;
  }
function cityBlur() {
    var city=document.getElementsByName('city')[0].value;
    var hasLetters = false;
    var hasNumbers = false;
    var i = 0;
    while (i < city.length && (!hasLetters || !hasNumbers)) {
    if (city[i].match(/[a-z]/i)) {
    hasLetters = true;
    } else if (city[i] >= '0' && city[i] <= '9') {
    hasNumbers = true;
    }
    i++;
    }
    if (!(hasLetters || hasNumbers)){
        document.getElementsByClassName("signup-city-error")[0].style.visibility = "visible";
    } else {
    return true;
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
    if (confirmation==password){
        document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "visible";
    }
}
function confirmationFocus() {
    document.getElementsByClassName("signup-confirmation-error")[0].style.visibility = "hidden";  
}
}