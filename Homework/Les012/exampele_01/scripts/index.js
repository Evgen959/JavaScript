
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultIndex = document.querySelector('#index');
const trueFalse = document.querySelector('#trueFalse');
const getResultButton = document.querySelector('#resultButton');


getResultButton.addEventListener('click', showResult);


function showResult() {
    // alert("Test")
    let resultOfAdding;
    let resulTrueFalse;
    resultOfAdding = weightInput.value / Math.pow(heightInput.value / 100, 2);
    resultIndex.innerText = resultOfAdding.toFixed(2);

    if (resultOfAdding < 16) {
        resulTrueFalse = "Острый дефицит массы";
    } else if (resultOfAdding < 18.5) {
        resulTrueFalse = "Недостаточная масса тела";
    } else if (resultOfAdding < 25) {
        resulTrueFalse = "Норма";
    } else if (resultOfAdding < 30) {
        resulTrueFalse = "Избыточная масса тела";
    } else if (resultOfAdding < 35) {
        resulTrueFalse = "Ожирение первой степени";        
    } else if (resultOfAdding < 40) {
        resulTrueFalse = "Ожирение второй степени";
    } else {
        resulTrueFalse = "Ожирение третьей степени";
    }
    trueFalse.innerText = resulTrueFalse;
}







