
console.log('Перед setTimeout');

const timeHeandler = () => {
    console.log('Вывод четез 2000 мсек');
}

setTimeout(timeHeandler, 2000); // асенхронная операция


console.log('После запуска функции setTimeout');
const startLoopTime = Date.now();
for(let i = 0; i < 1000000000; i++) {
}
const endLoopTime = Date.now();
console.log(endLoopTime - startLoopTime);
