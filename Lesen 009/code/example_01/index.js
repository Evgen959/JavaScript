let a = undefined;


if(!a) {
    console.log('a = 0');

}
else {
    console.log('a > 0');
}


// console.log(1 !== 1);

const arrA = ['a', 'b', 'c'];
const lengthOfArrA = arrA.length;
console.log(lengthOfArrA);
console.log(arrA[1]);
// добавление и удоление в конце массива
arrA.push('d'); //добавление
console.log(arrA);
arrA.pop();// удаление 
console.log(arrA);
// добавление и удоление в начало массива
arrA.shift();// удаление
console.log(arrA);
arrA.unshift('A');//добавление
console.log(arrA);

//циклы
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }
const arrB = [];

for (let i = 1; i <= 10; i++){
    arrB.push(i);
    
}
console.log(arrB);

const arrC = [];

for (let i = 1; i <= 10; i++){
    arrC.unshift(i);
    
}
console.log(arrC);

let randA = Math.random();
console.log(randA)
console.log(Math.ceil(7.1)); // округление в верх
console.log(Math.floor(8.9));// округление в низ
console.log(Math.round(10.55)); // округление по принцыпам математики

// класное мучение
// создать массив пустой массив, запустить цикл, заполнить массив рандомными числами от 0 до 100,
// 10 элементов в массиве должно быть

const arrD = [];


for (let i = 1; i <= 10; i++){
    let h = Math.round(Math.random() * 100);
    arrD.push(h);
    
}
console.log(arrD);








