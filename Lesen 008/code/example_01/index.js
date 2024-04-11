console.log("Hello");

// string
// numder
// bigInt
// boolean
// undefined
// null
// symbol

// object


// var / let / const

//var a = "hello"; // устаревший способ обявления переменной

// let /const

// let
// let b = 'i am b';
// b = 'not b am i';
// console.log(b);

// const b = 'i am b';
// b = 'not b am i';
// console.log(b);


let p = 5;
let pp = p;
p = 6;
console.log(pp);

// let arr = [1, 2, 3];
// let arrB = arr;
// arr = [1, 2, 3, 4];
// console.log(arrB);

// const arr = [1, 2, 3];
// const arrB = arr;
// console.log(arr);
// arr.push(4);
// console.log(arr);
// console.log(arrB);

const arrA = [1, 2];
const arrB = [1, 2];

let a = 'a';
const b = 'a';

// console.log(arrA === arrB);
// console.log(a === b);

console.log(typeof a);
a = 5;
console.log(typeof a);

// < > <= >= !=


const c = 5;
const d = '5';

console.log(a === d); // строгое сравнение
console.log(a == d);  // не строгое сравнение

// console.log(typeof d);
// console.log(typeof Number(d));

console.log('---to String ---' );
// 1. to String
console.log(String(5));
console.log(String(null));
console.log(String(undefined));

console.log('---to Boolean ---' );
// 2. to boolean
console.log(Boolean('5'));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(undefined));
console.log(Boolean(null));


console.log('---- to number ----');
// 3. to number
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(''));
// console.log(typeof Number('str'));
console.log(typeof Number('str'));


// const result = Number('str');
// console.log(typeof result);

// // type of null
// console.log(typeof null);

// non-scrict comparison (== / !=) / приведение к числу для сравнения
console.log('non-scrict compariso');
console.log(6 == '6');
// console.log(null == '0'); // !



// comparison null %  undefined / не приводит к числу
console.log('------null == undefined------');
console.log(null == undefined);
console.log(Number(null));
console.log(Number('0'));