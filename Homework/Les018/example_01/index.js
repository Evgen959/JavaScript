// Задание
// https://jsonplaceholder.typicode.com/todos
// с помощью fetch взять список дел по ссылке выше, 
// обрезать (slice) до 10-15, потом с помощью map привести 
// элементы к нужному нам виду, и использовать этот массив 
// для вывода в нашем проекте ту ду листа.
let todo;
const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');

console.log(fetchResult);

fetchResult
    .then((response) => {return response.json()})
    .then((date) => {objectInArray(date.slice(0, 10))})
const objectInArray = (arrayObject) => {
    
    const array = (arrObj) => {  
        arrObj.task = arrObj.title;    // замена ключа объекта на другой
        delete arrObj.title;           // удаление старого ключа
        arrObj.done = arrObj.completed; // замена ключа объекта на другой
        delete arrObj.completed;       // удаление старого ключа
        arrObj.delete = false;         // добавление ключа с данными 
        arrObj.date = "2024-04-22";    // добавляем дату
        return arrObj;
     }
     todo = arrayObject.map(array); // запускаем функцю для преобразования 
                                    // пришлого массива до нужной формы
     console.log(todo);
     pusharrayA();          // запускаем функцию которая использует массив todu
 }
console.log(todo);


// const arrayObject = [{userId: 1, id: 1, title: 'delectus aut autem', completed: false},
// {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}, 
// {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false}, 
// {userId: 1, id: 4, title: 'et porro tempora', completed: true}, 
// {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}, 
// {userId: 1, id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis', completed: false},
// {userId: 1, id: 7, title: 'illo expedita consequatur quia in', completed: false},
// {userId: 1, id: 8, title: 'quo adipisci enim quam ut ab', completed: true},
// {userId: 1, id: 9, title: 'molestiae perspiciatis ipsa', completed: false},
// {userId: 1, id: 10, title: 'illo est ratione doloremque quia maiores aut', completed: true}];
    

// console.log(todo);

