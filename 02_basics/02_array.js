const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]



// marvel_heroes.push(dc_heroes) //array ke andar array ajayega 



// console.log(marvel_heroes[3][2]);  


//push pushes on exisiting array concat returns a new array



// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const allNew_heroes = [...marvel_heroes,...dc_heroes]
console.log(allNew_heroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_anotherarray = another_array.flat(Infinity)   //we have to give depth here 

console.log(usable_anotherarray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("Rishav"));

console.log(Array.from({name: "Rishav"}));  //intresting case we have to define keys se array banao or value se alag
//but upar wala abhi khali array return karega 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));









