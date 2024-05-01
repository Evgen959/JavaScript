let todo;

const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');
console.log(fetchResult);

fetchResult
    .then((response) => {return response.json()})
    .then((date) => { objectInArray(date.slice(0, 10))})

const objectInArray = (arrayObject) => {
    
   const array = (arrObj) => {  
    arrObj.task = arrObj.title; // замена ключа объекта на другой
    delete arrObj.title;        // удаление старого ключа
    arrObj.done = arrObj.completed;
    delete arrObj.completed;
    arrObj.delete = false;      // добавление ключа с данными 
    arrObj.date = "2024-04-22"; // добавляем дату
    return arrObj;
    }
    todo = arrayObject.map(array); // запускаем функцю для преобразования 
                                   // пришлого массива до нужной формы
    console.log(todo);      // запускаем функцию которая использует массив todu
    pusharrayA();
}

const fieldInput = document.querySelector('#input-field');
const fieldOutput = document.querySelector('#outputField');
const getResultButton = document.querySelector('#resultButton');
const getDeleteButton = document.querySelector('#clear-one');

const ff = (object) => {
    const outputField = document.createElement('li'); // создание li
    outputField.innerText = object.task;    
    outputField.classList.add('list-item');
    if (object.done) {
        outputField.classList.add('list-item_done');
    }
    if (object.delete) {
        outputField.classList.add('list-item_doneDelete');
    }        
    const arrayAdd = () => {
        console.log(outputField.innerText);            
        const fff = (object) => {
            if (object.task === outputField.innerText) {
                if (object.done === false) {
                    object.done = true;
                } else if (object.done === true && object.delete === false) {
                    object.delete = true;
                } else if (object.delete === true) {
                    object.delete = false;
                }
                pusharrayA();
            }
        }
        todo.forEach(fff);   
    }    
    outputField.addEventListener('click', arrayAdd);            
    return outputField;    
} 

const pusharrayA = () =>{
    // console.log(todo);
    const arrayToDo = todo.map(ff);
    fieldOutput.innerHTML = '';
    fieldOutput.append(...arrayToDo);
    
}
// pusharrayA();


getResultButton.addEventListener('click', showResult); // кнопа добавления дел
function showResult() {
    const task1 = {
        task: fieldInput.value,
        date: '',
        done: false,
        delete: false
    };
    todo.push(task1);
    pusharrayA();
    console.log(todo); 
    fieldInput.value = '';  
}

getDeleteButton.addEventListener('click', deleteLi); // кнопка удаления дел
function deleteLi() {
    const deleteLiFiltrA = (objectLi) => {
        return objectLi.delete === false ? objectLi : false;
    }
    const deleteLiFiltr = todo.filter(deleteLiFiltrA);
    console.log(deleteLiFiltr);
    todo = deleteLiFiltr;
    pusharrayA();
} 

