/* 2a-make a string variable into a string variable in uppercase*/
var wordLowercase='hipoalergenic';
var wordUppercase=wordLowercase.toUpperCase();
console.log('ex-2a-word-in-uppercase:' + wordUppercase);
/* 2b-create a variable with at least 10 characters and a second one with the first 5 characters of 
the first one*/
var completeWord1='worksheets';
var incompleteWord=completeWord1.substring(0,5);
console.log('ex-2b-first-5-characters:' + incompleteWord);
/* 2c- create a variable with at least 10 characters and a second one with the last 3 characters of 
the first one*/
var completeWord2='congratulations';
var finalThreeLetters=completeWord2.substring(12,15);
console.log('ex-2c-final-3-letters:' + finalThreeLetters);
/* 2d-create a variable with at least 10 characters and change the first letter to Uppercase, 
save it in another variable*/
var word3='environment';
var word3Modified=(word3.substring(0,1)).toUpperCase()+(word3.substring(1)).toLocaleLowerCase();
console.log('ex-2d-word-modified:' + word3Modified);
/* 2e-create a variable with at least 10 characters and a blank space,
 find the position of the first blank space and save it in another variable */
 var sentance='hello world';
 var blankSpace=sentance.indexOf(' ');
 console.log('ex-2e-indexOf-blankspace:' + blankSpace);
/* 2f-create a variable with at least two long words and a space write a new string containing the 
first letter of the words in uppercase and the rest in lowercase*/
var quote='courage is grace under pressure';
var quoteModified=(quote.substring(0,1).toUpperCase() + quote.substring(1,8).toLowerCase()) + 
(quote.substring(8,9).toUpperCase() + quote.substring(9,11).toLowerCase()) + 
(quote.substring(11,12).toUpperCase() + quote.substring(12,17).toLowerCase()) +
(quote.substring(17,18).toUpperCase() + quote.substring(18,23).toLowerCase()) +
(quote.substring(23,24).toUpperCase() + quote.substring(24,31).toLowerCase());
console.log('ex-2f-quote-with-initial-uppercase:' + quoteModified);


