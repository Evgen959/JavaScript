console.log('------ №1 ------');
//№1 Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции: ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

function object(array) {
    console.log(array);
    const objectNew = {};
    for (let i = 0; i < array.length; i++) {
        objectNew[array[i]] = array[i];
    }
    return objectNew;
}
console.log(object(['a', 36.6, 'John Doe']));

console.log('------ №2 ------');
//№2 Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]

function arrayInObjekt(arrayA) {
    const objectA = {};
    for (let i = 0; i < arrayA.length; i++) {
        objectA[arrayA[i][0]] = arrayA[i][1];
    }
    return objectA;
}
console.log(arrayInObjekt([[ 'height', 170 ], [ 'weight', 80 ], [ 'sport', 'regbi' ], [ 'full name', 'John Doe' ], [ 'sing', 'love' ], [ 'speed', 90 ]]));

console.log('------ №3 ------');
//№3 Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции: { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

function objectInString (objectB) {
    const arrOfObject = Object.values(objectB);
    let string1 = "";
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        // if (i === arrOfObject.length - 1) {
        //     string1 = string1 + arrOfObject[i];
        //   //  string1 = `${string1}${arrOfObject[i]}`;

        // } 
        // else {
        //     string1 = string1 + arrOfObject[i] + ", ";
        //   //  string1 = `${string1}${arrOfObject[i]}, `;
        // }
        
        //     // сокрощение
        //    string1 = (i === arrOfObject.length - 1)
        //     ? `${string1}${arrOfObject[i]}`
        //     : `${string1}${arrOfObject[i]}, `;

        // сокрощение
        string1 = `${string1}${arrOfObject[i]}${(i === arrOfObject.length - 1) ? '' : ', '}`

    
    
    }
    return string1;
}
const objectF = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInString(objectF));


console.log('------ №4 ------');
//№4 Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример: { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
// function objectInObject (objectE) {
//     const arrOfObject = Object.entries(objectE);
//     const objectENew = {};
//     console.log(arrOfObject);
//     for (let i = 0; i < arrOfObject.length; i++) {
//         objectENew[arrOfObject[i][0]] = typeof arrOfObject[i][1];
    
//     }
//     return objectENew;
// }
// const objectW = {
//     a: 'a', 
//     '36.6': 36.6, 
//     'John Doe': 'John Doe'
// }
// console.log(objectInObject(objectW));


console.log('------ №4* ------');
//№4* Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.
// Пример: { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

function objectInObject (objectE) {
    const arrOfObject = Object.entries(objectE);
    const objectENew = {};
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        objectENew[arrOfObject[i][0]] = {value: arrOfObject[i][1], type: typeof arrOfObject[i][1]};
    
    }
    return objectENew;
}
const objectW = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInObject(objectW));







