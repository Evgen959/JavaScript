console.log('------- №1 ------');
// 1. Надо добавить каждому игроку ключ(свойство) 'goals' и туда записать 
// случайное целое число от 0 до 20. При этом должен быть сформирован новый массив.


const players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];
const playerscopy = [...players];

const ff = (objectA) => {
    console.log(objectA);
    objectA.goals = Math.round(Math.random() * (20 - 1) + 1);
    return objectA;
    }
const playersNew = playerscopy.map(ff);
console.log(playersNew);


console.log('------- №2 ------');
// 2. Отфильтровать и вывести в консоль всех игроков, у которых рост выше или 
// равен 180 и вес ниже 80.
const callbackForFilter = (objectB) => {
    return (objectB.height >= 180 && objectB.weight < 80) ? true: false;
}
const playersFilter = playerscopy.filter(callbackForFilter);
console.log(playersFilter);


console.log('------- №3 ------');
// 3. Отсортировать игроков по количеству забитых голов.
const playersSort = (object1, object2) => {
    return object1.goals < object2.goals ? -1: 1;
}
console.log(playersNew.sort(playersSort));


