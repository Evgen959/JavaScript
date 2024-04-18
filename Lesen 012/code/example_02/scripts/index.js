// console.log('test');



//мняем
const outTitle = document.querySelector('.title');
// console.log(outTitle);
outTitle.innerText = 'Header';
outTitle.classList.add('font-red');



//создем новые ноды
const ourSpan = document.createElement('span');
ourSpan.innerText = 'Text in span';
ourSpan.classList.add('span-style');
// созданную ноду вставляем куда то
outTitle.append(ourSpan);


// слушаем события
// создаем кнопку
const ourButton = document.createElement('button');
ourButton.innerText = 'lets go';
// размещаем кнопку
const divForButton = document.querySelector('.button');
divForButton.append(ourButton);

// вешаем слушатель на кнопку

ourButton.addEventListener('click', functionB);


// вспомогательная функция колбек (calldack)
function functionB() {
    console.log('Я функция functionB выполнилась');
}




