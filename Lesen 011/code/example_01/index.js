const arrayA = ["a", "b", "x"];
console.log(arrayA);

// objects

const objA = {
    param1: "a",
    param2: "b",
    param3: "x",
}
console.log(objA);

const carBMW7401998 = {
    doors: 4,
    wheels: 4,
    engine: 2000,
    weight: 1750,
    goal: function() {
        console.log("I made goal")
    },
    number: function() {
        return 5;
    }
}
console.log(carBMW7401998.engine);
console.log(carBMW7401998["doors"]);

carBMW7401998.goal();


let randomN = Math.random();
let numberCarBMW7401998 = carBMW7401998.number();
console.log(numberCarBMW7401998);

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

