/* 3a-show in console the 5th an 11th month of the year */
let months=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('the fifth month of the year is:' + months[4]);
console.log('the eleventh month of the year is:' + months[10]);
/* 3b-Order the previous array in alphabetical order */
alphabeticalOrder=months.sort();
console.log('month-in-alphabetical-order:' + alphabeticalOrder);
/* 3c- add an element at the end and at the beginning of the previous array */
months.push('end');
months.unshift('beginning');
console.log('push and unshift an element in months array:' + months);
/* 3d- substract an element from the array using shipt and pop */
months.shift();
months.pop();
console.log('shift and pop elements of the previous array:' + months);
/* 3e- invert the order of the array*/
months.reverse();
console.log('months of the year in reverse:' + months);
/*3f- unify the array in a string where each month is separated with "-" */
console.log('string with the months of the year:' + (months).join('-'));
/* create a copy of the array only with the months from May to November */
let months2=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('from May to November array:' + );