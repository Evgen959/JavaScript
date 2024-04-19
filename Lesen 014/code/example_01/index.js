// forEach
// const ff = (a, b, c) => {    // a - элемент массива b -
//     console.log(`${a} + ${b} + ${c}`);
// }
const arrF = [1, 2, 3, 5, 4, 10, 6];
console.log(arrF);
// let b =0;
// const ff = (a) => { 
//     b = b + a;
           
// }

let arrayA = [];
const ff = (a) => {
    arrayA.push(a + 3); // пушим в пустой массив
}


arrF.forEach(ff); // запускает функцию для каждого элемента массива столько раз сколько элементов массива

// console.log(arrayA);



// map !!!
const callbackForMap = (element) => {
    return element + 4;
}

const arrayAMap = arrF.map(callbackForMap);
// console.log(arrayAMap);


const callbackForMapA = (element) => {
    return element * element;
}

const arrayBMap = arrF.map(callbackForMapA);// возвращает новый переделоный массив
// console.log(arrayBMap);

// filter
const callbackForFilter = (element) => {
    // if (element > 4) {
    //     return true;         
    // } else {
    //     return false;
    // }
    return element > 4 ? true: false;
}

const arrayAFilter = arrF.filter(callbackForFilter);
// console.log(arrayAFilter);

// slice
const arrayASliceResult = arrF.slice(0, 2);
// console.log(arrayASliceResult);

// sort
const sallBackForSort = (a, b) => {
    // if (a < b) {
    //     return -1;
    // } else {
    //     return 1;
    // }

    // return a > b ? -1: 1;

    return b - a

}

const arrFcopy = [...arrF];  // доелаем копию массива

console.log(arrFcopy.sort(sallBackForSort));





const sallBackForSortC = (object1, object2) => {
    
    return object1.height < object2.height ? -1: 1;
}
const arrayC = [
  {"name": "John", "surname": "Doe", "height": 198, "effectiveness": 15.6},
  {"name": "Jane", "surname": "Smith", "height": 183, "effectiveness": 12.3},
  {"name": "Mike", "surname": "Brown", "height": 202, "effectiveness": 18.4},
  {"name": "Emily", "surname": "Davis", "height": 190, "effectiveness": 14.8},
  {"name": "Chris", "surname": "Wilson", "height": 205, "effectiveness": 20.1}
];

console.log(arrayC.sort(sallBackForSortC));
