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
let counter = 10;

const setIntervalTime = Date.now();

const timeHeandler = () => {
        if (counter >= 0) {
            spanElement.innerText = counter;
            counter--;
        } else {
            clearInterval(intervalID);
        }  
    }
const intervalID = setInterval(timeHeandler, 2000);
const start = () => {
    counter = numberInput.value;
    console.log(counter);
    setInterval(timeHeandler, 2000);    
}
getButton.addEventListener('click', start);


