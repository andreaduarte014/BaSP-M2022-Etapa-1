/* 6a- make funtion to sum up two numbers*/
function sumUp (num1,num2) {
   var sum=num1 + num2;
   return 'la suma es: '+ sum;  
}
console.log('ex-6a-solution:', sumUp(8,15));
/* 6b- show an alert if any of the previous number is not a number */
function sumUpValidation(num1,num2) {
   if (isNaN(num1)||isNaN(num2)){
      return NaN;
   }else {
      return 'la suma es: '+ (num1+num2);  
   }
}
console.log('ex-6b-sum with validation:', sumUpValidation(4,'hola'));
/* 6c- create the function 'validate integer' */
function validateInteger(number){
   if (Number.isInteger(number)) {
      return true;
   }
}
console.log('Ex-6c-validation of integer:', validateInteger(1));
/* 6d- use the function from 6b- and show a message if the number is "entero" if it's not turn it into one */
function sumUpValidation2 (num1, num2){
   if(isNaN(num1)||isNaN(num2)){
       return NaN;
   } else if(!Number.isInteger(num1)||!Number.isInteger(num2)){
       alert('Numbers must be integers');
       return Math.round(num1 + num2);
   } else {
       return sumUp(num1,num2);
   } 
}
console.log('ex-6d-sum up with integer validation:', sumUpValidation2(5.8, 23));
/* 6e- turn the validation from 6d- into a new function to use it inside the function sumUp */
function validtation (num1, num2) {
   if(isNaN(num1)||isNaN(num2)){
       alert('Error: All parameters must be numbers.');
       return NaN;
   } else if(!Number.isInteger(num1)||!Number.isInteger(num2)){
       alert('Numbers must be integers');
       return Math.round(num1 + num2); 
   } 
}
function sumUpValidation2 (num1, num2){
   if (Number.isInteger(num1 && num2)){
       return num1+num2
   } else {
       return validtation(num1, num2);
   }
}
console.log('ex-6e-sum up with validation: ', sumUpValidation2(6, 7.3));