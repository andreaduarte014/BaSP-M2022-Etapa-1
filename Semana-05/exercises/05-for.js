/* 5a- create an array with five words and show an alert with each of the  words*/
let drinks=['wine','beer','juice','ron','whisky'];
i=0;
for (i in drinks){
    (alert(drinks[i]));
}
/* 5b- make the first letter of each word in Uppercase and show an alert that says that the word has been modified */
i=0;
let newDrinks=[];
for (i in drinks){
    newDrinks.push(drinks[i].charAt(0).toUpperCase()+drinks[i].slice(1));
    //alert(newDrinks[i]);
}
/*5c- make a sentance containing all the names of the array in par 5a and show it in an alert */
var sentence=' ';
i=0;
for (i in newDrinks){
    sentence=sentence + ' ' + newDrinks[i];
}
alert(sentence);
/*5d- create an empty array and complete it with numbers from 0 to 9. Show the final array with console.log */
let array=[];
for(i=0;i<=9;i++){
    array.push(i);
}
console.log('ex-5d-numbers from 0 to 9:' + array);