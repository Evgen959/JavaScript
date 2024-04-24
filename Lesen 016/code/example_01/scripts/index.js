const humanJohh = {
    name: "John",
    surname: "Depp",
    age: 37,
    get newAge() {
        return this.age;

    },
    set newAge(newAgeNamber) {
        if (newAgeNamber - this.age > 1 ) {
            console.log('Error')
        } else {
            this.ade = newAgeNamber
        }
    }
}
const player = {
    play: function() {
        console.log("I am playing")
    }
}

Object.setPrototypeOf(humanJohh, player);
console.log(humanJohh);
humanJohh.play();

// ------

humanJohn.newAge = 67;
console.log(humanJohh.newAge);

