// https://api.github.com/users/facebook
// Асинхронная функция
// Которая получит данные о пользователе
// (Ник пользователя принимает как аргумент)
// И выводит на страничке аватар (картинку) пользователя
// И локацию
// Ну и логин (который как параметр принимает напоминаю)

const avatar = document.querySelector('.login')
const url = 'https://api.github.com/users/facebook';
let dataResponse;

const getData = async (api) => {
    const serverResponse = await fetch(api)
    dataResponse = await serverResponse.json()
    dataWork(dataResponse)
}
getData(url)
function dataWork(data){
    let dataWorkA = document.querySelector('.login');
    dataWorkA.innerText = data.login;
    dataWorkA.innerImege = data.login;


    console.log(data)
}


let imageDiv = document.createElement("div");// Создаем третий новый div для изображения
let image = document.createElement("img");  // Создаем элемент изображения
image.src = data.avatar_url;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.avatar_url                               
imageDiv.classList.add("avatar-image"); // Присваиваем класс для стилизации (если требуется)
imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
avatarUrlDiv.appendChild(imageDiv); // Добавляем созданный div внутрь элемента .avatar_url








// function recordNewItem()
//     {
//     let newItem;
//     newItem = toDODODD.value.trim(); // TUT NASA Асинхронная функция
//      if (newItem) 
//      { 
//     console.log(newItem);
//     const newListItem = document.createElement("li"); // Создаем новый элемент списка
//     newListItem.classList.add("list-item");// Добавляем класс "list-item" к новому элементу
//     newListItem.textContent = newItem;   // Устанавливаем текст нового элемента
//     list.appendChild(newListItem); // Добавляем новый элемент в список
//     newListItem.addEventListener('click', stylTudaSuda);     
//     }}












// const numberInput = document.querySelector('input');
// const getButton = document.querySelector('Button');
// const spanElement = document.querySelector('span');
// const txteOutput = document.querySelector('div');
// let counter;
// const txte = 'Время вышло';
// // const setIntervalTime = Date.now();


// const start = () => {
//     txteOutput.innerText = '';
//     counter = numberInput.value;
//     console.log(counter);
//     const timeHeandler = () => {
//         if (counter >= 0) {
//             spanElement.innerText = counter;
//             counter--;
//         } else {
//             spanElement.innerText = '';
//             clearInterval(intervalID);
//             txteOutput.innerText = txte;
//         }  
//     }
//     const intervalID = setInterval(timeHeandler, 1000); 
// }
// getButton.addEventListener('click', start);


