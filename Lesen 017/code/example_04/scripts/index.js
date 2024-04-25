const spanElement = document.querySelector('span')
let counter = 10;

console.log('Перед setTimeout');
const setIntervalTime = Date.now();

const timeHeandler = () => {
    // console.log('Вывод' + (Date.now() - setIntervalTime));
    // spanElement.innerText = (Date.now() - setIntervalTime);
    // if ((Date.now() - setIntervalTime) > 10000) {
    //     clearInterval(intervalID);
    // }
    if (counter >= 0) {
        spanElement.innerText = counter;
        counter--;
    } else {
        clearInterval(intervalID);
    }  
}

const intervalID = setInterval(timeHeandler, 2000); 
// clearInterval(intervalID);
console.log('После запуска функции setInterval');
// const startLoopTime = Date.now();
// for(let i = 0; i < 1000000000; i++) {
// }
// const endLoopTime = Date.now();
// console.log(endLoopTime - startLoopTime);
