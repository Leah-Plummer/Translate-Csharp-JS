console.log("Let's roll some dice, baby!")
console.log("--------------------------- \n")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    let rollOne = getRandomInt(1, 6)
    let rollTwo = getRandomInt(1, 6)
    let doubles = ""
    if (rollOne == rollTwo) {
        doubles = "DOUBLES!"
    }

    console.log(`${rollOne} + ${rollTwo} == ${rollOne + rollTwo} ${doubles}`)
    


}

