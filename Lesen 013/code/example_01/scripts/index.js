const fieldInput = document.querySelector('#input-field');
const fieldOutput = document.querySelector('#outputField');
const getResultButton = document.querySelector('#resultButton');

getResultButton.addEventListener('click', showResult);

function showResult() {
    // function done(test) {
    //     console.log(test);
    //     outputField.classList.add('list-item_done');
    // }

    const outputField = document.createElement('li');
    const done = (test) => {
        console.log(test);
        outputField.classList.add('list-item_done');
    }

    outputField.innerText = fieldInput.value;
    outputField.classList.add('list-item');
    fieldOutput.append(outputField);
    outputField.addEventListener('click', done);
       
}





// console.log(getCrossedDone);


