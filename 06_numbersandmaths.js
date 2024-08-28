const score = 400

console.log(score);

const balamce = new Number(100)

console.log(balamce);

console.log(balamce.toString().length);
console.log(balamce.toFixed(2));

const otherNumber = 23.8966
const thirdnumber = 123.8966

console.log(otherNumber.toPrecision(3));
console.log(thirdnumber.toPrecision(3));

//precision returns a string 

const hundreds = 1000000

console.log(hundreds.toLocaleString());





///////////////////Maths///////////////////

console.log(Math);
console.log(Math.abs(-4)); //sirf minus vallues plus hojate he


console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.min(4,3,6,7,8,9));
console.log(Math.max(4,3,6,7,8,9));


console.log(Math.random());  //math.random() ki value hamesa 0-1 ke bich me ayegi
//to avoid 0 we do 
console.log((Math.random()*10)+1);

console.log((Math.floor(Math.random()*10)+1));


//trick


const min = 10;
const max = 20;
//


//important trick below remever it to generate number between a range or above a number 


const min1 = 10;
const max2 = 100;
console.log(Math.floor(Math.random() * (max - min + 1))+min) 

console.log(Math.floor(Math.random() * (max2 - min1 + 1))+min) 






