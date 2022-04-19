/*4a- create a variable with a random value between 0 and 1 and show an alert if the numer is greater than 0.5 */
var random = Math.random(0,1);
if(random >= 0.5){
    alert('Greater than 0,5.');
 }else{
    alert('Lower than 0,5.');
}
/*4b- create a variable with a random value between 0 and 100 and show the followings alerts:
“Baby” if age is lower than 2 years old
“child” if age is between 2 y 12 years old
“teenanger” between 13 y 19 years old
“young” between 20 y 30 years old
“Adult” between 31 y 60 years old
“Oldman” between 61 y 75 years old
“ancient” if it is greater than 75 years old */
var age=Math.floor(Math.random()*101);
console.log('ex-4b-the age is:' + age);
if(age>=75){
    console.log('Ancient man');
 }else if (age>61 & age<75){
    console.log('Oldman');
}else if (age>31 & age<60){
    console.log('Adult');
}else if (age>20 & age <30){
    console.log('Young person')
}else if (age>13 & age<19){
    console.log('Teenanger')
}else if (age>2 & age<12){
    console.log(Child)
}else {
    console.log('baby')
}
