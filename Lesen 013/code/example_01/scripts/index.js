const todo = [
    {"task": "Купить продукты", "date": "2024-04-22", "done": true},
    {"task": "Позвонить другу", "date": "2024-04-23", "done": false},
    {"task": "Посетить врача", "date": "2024-04-24", "done": false},
    {"task": "Заплатить за квартиру", "date": "2024-04-25", "done": true},
    {"task": "Подготовить отчет", "date": "2024-04-26", "done": false},
    {"task": "Починить автомобиль", "date": "2024-04-27", "done": true},
    {"task": "Посадить цветы", "date": "2024-04-28", "done": false},
    {"task": "Прочитать книгу", "date": "2024-04-29", "done": true},
    {"task": "Сходить в спортзал", "date": "2024-04-30", "done": false},
    {"task": "Приготовить ужин", "date": "2024-05-01", "done": true}
]


const fieldInput = document.querySelector('#input-field');
const fieldOutput = document.querySelector('#outputField');
const getResultButton = document.querySelector('#resultButton');
const getDeleteButton = document.querySelector('#clear-one');

const ff = (object) => {
    const outputField = document.createElement('li');
    outputField.innerText = object.task;    
    outputField.classList.add('list-item');
    if (object.done) {
        outputField.classList.add('list-item_done');
    }
    const done = () => {
        outputField.classList.add('list-item_done');
    }
    outputField.addEventListener('click', done);
    const doneA = () => {
        if (document.querySelector('li') === document.querySelector('.list-item_done')) {
            outputField.classList.add('list-item_doneDelete');
        }        
    }
    outputField.addEventListener('click', doneA);
    return outputField;
    
} 
const pusharrayA = () =>{
    const arrayToDo = todo.map(ff);
    fieldOutput.append(...arrayToDo);
}
pusharrayA();


getResultButton.addEventListener('click', showResult);
function showResult() {
    const task1 = {
        task: fieldInput.value,
        date: '',
        done: false
    };
    todo.push(task1);
    const element = document.getElementById("outputField");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    pusharrayA();
    console.log(todo); 
    fieldInput.value = '';  
}
const clearOne = function(){
    if(list.hasChildNodes()) {
        list.firstChild.remove()
    }
}

getDeleteButton.addEventListener('click', deleteLi);
function deleteLi() {
    const node = document.querySelector('.list-item_doneDelete');
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
} 


// function changeStatus(event){
//     const listItem = event.target;
//     listItem.classList.toggle('list-item_done');
// }
// list.addEventListener('click', changeStatus);

// clearOneBtnElement.addEventListener('click',clearOne);
// list.addEventListener('click', changeStatus);
// btnCreate.addEventListener('click', pushText);




// getResultButton.addEventListener('click', showResult);

// function showResult() {
//     const outputField = document.createElement('li');
   
//     const done = (test) => {
//         console.log(test);
//         outputField.classList.add('list-item_done');
//     }

//     outputField.innerText = fieldInput.value;
//     outputField.classList.add('list-item');
//     fieldOutput.append(outputField);
//     outputField.addEventListener('click', done);
// }
// console.log(getCrossedDone);







