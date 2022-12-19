// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

console.log("\n")

const ThePlaceNames = []

for (const name of names) 
{
  if (name.startsWith('The')) {
    ThePlaceNames.push(name)
  }
}

console.log(`'The' Place Names`)
for (const theName of ThePlaceNames)
{
  console.log(`${theName} \n`)

}

