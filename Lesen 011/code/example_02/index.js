const arrA = ["a", "b", "c"];

const arrAo = {
    0: "a",
    1: "b",
    2: "c"
}
console.log(arrA[0]);
console.log(arrAo[0]);



// испытуемый объект
const andrey = {
    mama: "Oly",
    papa: "Koly",
    vozrost: 4,
    hobbi: function() {
        console.log("penye")
    }

}

console.log(andrey.mama);
andrey.hobbi();


// меняем значения
andrey.vozrost = andrey.vozrost + 1;
// добавляем значение
andrey.MotherName = "Sara";
// удаляем значение
delete andrey.papa;
console.log(andrey);

// object methods

// 0 есть ли ключ в объекте (оператор)
// >< === !== in
if ("mama" in andrey){
    console.log("есть")

}else {
    console.log("нет")
}


// 1- get arry of keys - Object.keys(<nameObj>)
console.log(Object.keys(andrey));

console.log("получаем значения ключей и выводим в консоль");
// получаем ключи массива, проходим циклом по массиву ключей 
// и получаем значения ключей и выводим в консоль
const array = Object.keys(andrey);
for (let i = 0; i < array.length; i++) {
    console.log(andrey[array[i]]);
}

// 2- get arry of valuals
console.log("Object.values(andrey)");
console.log(Object.values(andrey));

// 3- get arry of entries
console.log("Object.entries(andrey)");
console.log(Object.entries(andrey));

console.log("классная работа");
// классная работа:
// создаю массив из нашего обьета
const arrOfObject = Object.entries(andrey);
// сделайте из этого массива обратно обьект
const andreyNew = {};
console.log(andreyNew);
for (let i = 0; i < arrOfObject.length; i++) {
    andreyNew[arrOfObject[i][0]] = arrOfObject[i][1];
    
}
console.log(andreyNew);


