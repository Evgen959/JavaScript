//  Задание 1.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. Вывести в консоль.

console.log("-----Задание 1------");
const array = [];
for (let i = 1;  i <= 10; i ++) {
    let a = Math.round(Math.random() * 100);
    array.push(a);
}
console.log(array);
console.log(...array);
console.log("min", Math.min(...array));
console.log("max", Math.max(...array));
// console.log("min", Math.min.apply(null, array));
// console.log("max", Math.max.apply(null, array));

// Задание 2.
// Объявить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.

console.log("-----Задание 2------");
//const arrayA = array;

//const arrayA = [].concat(array);
const arrayA = [...array]; // дублирование массива
console.log(arrayA);
const l = arrayA.shift(arrayA[0]); // возвращает удаленный элемент 
arrayA.push(l);
console.log(arrayA);

// Задание 3.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

console.log("-----Задание 3------");
const arrayB = [];
for (let i = 1;  i <= 10; i ++) {
    let a = Math.round(Math.random() * (75 - 1) + 1);
    arrayB.push(a);
}
console.log(arrayB);
console.log("min", Math.min.apply(null, arrayB));
console.log("max", Math.max.apply(null, arrayB));
console.log("∑", Math.min.apply(null, arrayB) + Math.max.apply(null, arrayB));

// Задание 4.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.

console.log("-----Задание 4------");
const arrayC = [];
let b = 0;
for (let i = 1;  i <= 10; i ++) {
    let a = Math.round(Math.random() * (50 - 1) + 1);
    arrayC.push(a);    
    b = b + a;
}
console.log(arrayC);
console.log("∑", b);

// Задание 5 (необязательное).
// Объявить массив из 5 элементов и заполнить его любыми числами. Присвоить 5 переменным значения из массива с помощью деструктуризации.

console.log("-----Задание 5------");
var arrayD = [76, 39, -35, 82, 13];
var [c, d, f, g, h] = arrayD;
console.log(c, d, f, g, h);

// Задание 6.
// Разбить строку "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота." на слова и вывести в консоль по одному слову в строке. 

console.log("-----Задание 6------");
let str = 'Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.';
let strA = str.replaceAll(/([,.:!])/g, ''); // убераем знаки припенания
let arrayOfWords = strA.split(" ");
for (let i = 0;  i <= 6; i ++) {
    console.log(arrayOfWords[i]);
}


