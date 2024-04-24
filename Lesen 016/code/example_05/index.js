const arrayToPow = [2, 4, 6, 8, 7, 5]
// console.log(arrayToPow);

const arrayA = (number) => {
    return number * number;
}
const arrayToPowNew = arrayToPow.map(arrayA);
// console.log(arrayToPowNew);

const arrayB = (number) => {
    return (number % 2) === 0 ? number * 2 : number;
}
const arrayToPowNewB = arrayToPow.map(arrayB);
// console.log(arrayToPowNewB);


const mixedArray = [2, 3, 'a', 5, 8, 'e', 10];
// console.log(mixedArray);
const arrayC = (number) => {
    return typeof number === 'string' ? 0 : number;
}
const mixedArrayNew = mixedArray.map(arrayC);
// console.log(mixedArrayNew);

let todoList = [
    { task: "Купить продукты", status: true },
    { task: "Позвонить другу", status: false },
    { task: "Почитать книгу", status: true },
    { task: "Заняться спортом", status: false },
    { task: "Изучить JavaScript", status: true },
    { task: "Подготовить отчет", status: false }
];
console.log(todoList);
const todoListFiltrA = (element) => {
    return element.status === true ? element : false;
}
const todoListFiltr = todoList.filter(todoListFiltrA);
todoList = todoListFiltr;
console.log(todoList);

