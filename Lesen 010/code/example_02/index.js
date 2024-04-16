function sumAB(a, b){
    const sum = a + b;
    // console.log(sum);
    return sum;
}

const sum1 = sumAB(3, 4);
console.log(sum1);

// функция которая ищет максиммум в массиве

function maxInArr(arr) {
    let maxNum = Math.max(...arr);
    return maxNum;
    // предыдущие две строки можно заменить на одну:
    // return Math.max(...arr);
}
const arrC = [1, 5, 25, 10, 20];
console.log(maxInArr(arrC));

// Задание на урок. Создать функцию которая принимает массив, и возвращает новый массив,
// где каждый элемент массива увеличен на второй аргумент

// function declaration
// function arrNa10(arrA, a) {
//     const arrD = [];
//     for (let i = 0; i < arrA.length; i++) {
//         arrD.push(arrA[i]+a);
//         //arrD[i] = arrA[i]+10;
//     }
//     return arrD;
// }
// const arrF = [1, 8, 3, 13];
// console.log(arrNa10(arrF, 11));


// function expression

//  const arrNa10= function(arrA, a) {
//     const arrD = [];
//     for (let i = 0; i < arrA.length; i++) {
//         arrD.push(arrA[i]+a);
//         //arrD[i] = arrA[i]+10;
//     }
//     return arrD;
// }
// const arrF = [1, 8, 3, 13];
// console.log(arrNa10(arrF, 11));

// стрелочные функции
const arrNa10 = (arrA, a = 10) => {
    const arrD = [];
    for (let i = 0; i < arrA.length; i++) {
        arrD.push(arrA[i]+a);
        //arrD[i] = arrA[i]+10;
    }
    return arrD;
}
const arrF = [1, 8, 3, 13];
console.log(arrNa10(arrF, 20));


// // функция которая ищет максимум в Массиве
// function maxInArr(arr) {
//     let maxNum = Math.max(...arr);
//     return maxNum;
//     // предыдущие две строки можно заменить на одну:
//     // return Math.max(...arr);
//}
//Переписать и сделать стрелочную

const maxInArray = (array) => {
    return Math.max(...array);
}
const arrG = [1, 8, 3, 13];
console.log(maxInArray(arrG));

// сократим
const maxInArrayShort = array =>  Math.max(...array);


