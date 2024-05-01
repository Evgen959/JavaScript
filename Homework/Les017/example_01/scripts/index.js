// Задание
// Сделать страничку-таймер обратного отсчета. На страничке должно быть поле 
// для ввода времени в секундах, кнопка "старт" и обратный отсчет 
// должен начаться при нажатии на кнопку. Отсчет должен быть виден 
// на страничке и обновляться каждую секунду. По окончании отсчета 
// должен появиться тест "время вышло", или звуковое оповещение, 
// таймер при этом должен остановиться.


const numberInput = document.querySelector('input');
const getButton = document.querySelector('Button');
const spanElement = document.querySelector('span');
const txteOutput = document.querySelector('div');
let counter;
const txte = 'Время вышло';
// const setIntervalTime = Date.now();


const start = () => {
    txteOutput.innerText = '';
    counter = numberInput.value;
    console.log(counter);
    const timeHeandler = () => {
        if (counter >= 0) {
            spanElement.innerText = counter;
            counter--;
        } else {
            spanElement.innerText = '';
            clearInterval(intervalID);
            txteOutput.innerText = txte;
        }  
    }
    const intervalID = setInterval(timeHeandler, 1000); 
}
getButton.addEventListener('click', start);


