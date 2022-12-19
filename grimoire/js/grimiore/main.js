console.log("Do you believe in magic?");
console.log("------------------------");

const spells = 
[
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyReqired: 5.1  
    },

    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyReqired: 2.99  
    },
    
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyReqired: 12.2  
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyReqired: 100.0  
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyReqired: 2921.5  
    }
]

const GoodBadSpells = () => {
    const goodSpells = []
    const evilSpells = []

    for (const spell of spells) {
        if (spell.isEvil == true){
            evilSpells.push(spell.name)
            
        } else {
            goodSpells.push(spell.name)
        }
    }
    console.log("Good Book \n")
    for (const goodSpell of goodSpells) {
        console.log(`   ${goodSpell}\n`)
    }
    console.log('\nEvil Book \n')
    for (const evilSpell of evilSpells) {
        console.log(`   ${evilSpell}\n`)
    }
    
};

GoodBadSpells();
