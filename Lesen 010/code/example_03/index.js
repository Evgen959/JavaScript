// template string (шаблонная строк)

const nameA = "Artur";
const strA = "Hello" + nameA;
console.log(strA);

const srtB = `Hallo ${nameA}`;

console.log(srtB);


// Класная работа номер 5
// Написать стрелочную функцию, которая принимает как аргумент имя (строку), и возвращает запись (строку):
// "My name is <имя>"


const srtC = (nameD) => { 
    return `My name is ${nameD}`};
console.log(srtC("Jek"));



const doubleF = (name) => {
    return  `${srtC(name)} и я алкоголик`;

}  

console.log(doubleF("Mario"));
