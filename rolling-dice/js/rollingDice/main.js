console.log("Let's roll some dice, baby!")
console.log("--------------------------- \n")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NumToWord = (roll) => {
    let dieString = ""
    
    switch (roll)
    {
        
        case 1:
            dieString = "one"; // These \uXXXX values are fancy unicode characters
            break;
        case 2:
            dieString = "two";
            break;
        case 3:
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
             dieString = "five";
            break;
        case 6:
             dieString = "six";
             break;
    }
     return dieString;       
}

for (let i = 0; i < 10; i++) {
    let rollOne = getRandomInt(1, 6);
    let r1 = NumToWord(rollOne); 
    let rollTwo = getRandomInt(1, 6);
    let r2 = NumToWord(rollTwo);
    let doubles = ""
    
    if (rollOne == rollTwo) {
        doubles = "DOUBLES!"
    }
    
    console.log(`${r1} + ${r2} == ${rollOne + rollTwo} ${doubles}`)
}





    



