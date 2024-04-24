function User(name, surname) {
    this.name = name;
    this.surname = surname;
}
// Создаем всем объектам доступный метод на прототипе:
User.prototype.play = function() {
    console.log("I am playing");
}

const JohnyDepp = new User("Johny", "Depp");
// console.log(JohnyDepp);
JohnyDepp.play();

const JohnTravolta = new User("Johny", "Travolta");
JohnTravolta.play();

console.log(JohnTravolta.play === JohnyDepp.play);


