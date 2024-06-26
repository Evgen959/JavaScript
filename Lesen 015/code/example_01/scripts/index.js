let todo = [
    {"task": "Купить продукты", "date": "2024-04-22", "done": true, "delete": false},
    {"task": "Позвонить другу", "date": "2024-04-23", "done": false, "delete": true},
    {"task": "Посетить врача", "date": "2024-04-24", "done": false, "delete": false},
    {"task": "Заплатить за квартиру", "date": "2024-04-25", "done": true, "delete": false},
    {"task": "Подготовить отчет", "date": "2024-04-26", "done": false, "delete": false},
    {"task": "Починить автомобиль", "date": "2024-04-27", "done": true, "delete": false},
    {"task": "Посадить цветы", "date": "2024-04-28", "done": false, "delete": false},
    {"task": "Прочитать книгу", "date": "2024-04-29", "done": true, "delete": false},
    {"task": "Сходить в спортзал", "date": "2024-04-30", "done": false, "delete": false},
    {"task": "Приготовить ужин", "date": "2024-05-01", "done": true, "delete": false}
]


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
    const arrayToDo = todo.map(ff);
    fieldOutput.innerHTML = '';
    fieldOutput.append(...arrayToDo);
    console.log(todo);
}
pusharrayA();


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

