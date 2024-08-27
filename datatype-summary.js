//primitive datatype and non-primitive datatype


//difference is in call by value and call by refference like how data is stored in memory and how we acccess it 

//primitive type or call by value type


//js is dynamically typed


//7 types = String,Number,Boolean,null,undefined,symbol,Bigint

//Refference type or non-primitive type

//Array,Objects, Functions

const id = Symbol('123') //return type bhi symbol he 

const anotherID = Symbol('123')

console.log(id === anotherID);


//BigInt

const bigNumber = 2345678654322456786754324n


const heros = ["shaktiman", "naagraj", "doga"];

let myobj = {
    name: "hitesh",
    age: 22,
}


//fucntion variable wala tarika


const myFunction = function(){
    console.log("hello world");   
}


console.log(typeof bigNumber);
console.log(typeof myFunction);


//jitne bhi no-primitive type inka return type object hi ata he agar function bhi he object function bola jata he

console.log(typeof anotherID);

//https://262.ecma-international.org/5.1/#sec-11.4.3





