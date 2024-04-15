let strA = 'Hello my big world';
console.log(strA);

console.log("-------------");
let strB = strA.toUpperCase();
console.log(strB);

console.log("-------------");
let arrOfWords = strA.split(' ');
console.log(arrOfWords);
console.log(arrOfWords[0]);

console.log("-------------");
console.log(arrOfWords.join(' '));

console.log("-------------");
let strC = 'Hello, my, big, world';
let arrWithc = strC.split('');
console.log(arrWithc);

console.log("-------------");
/////
let bigLetter = 'H';
console.log(bigLetter === bigLetter.toUpperCase());
