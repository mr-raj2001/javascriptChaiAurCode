const name = "Rishav"
const repoCount = 50

console.log(name + repoCount + "Value");


//we use backticks for string interloation basically place holder

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rishav-Raj')

//if we run this above code in console see the output

console.log(gameName[0]);

console.log(gameName.__proto__);  // this value will be visible in console also possible here 

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log((gameName.indexOf('R')));


const newString = gameName.substring(0,4)  //last value include nahi hoti he 
//substring will not follow negative value

console.log(newString);


const anotherString = gameName.slice(-9, 4);

console.log(anotherString);


const newStringOne = "   Rishav "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rishav.com/rishav%20choudhary"  

console.log(url.replace('%20','-'));

console.log(url.includes('rishav'));


console.log(url);

const gameNAme2 = "Rishav-raj-calsoft"

console.log(gameNAme2.split('-'));
















