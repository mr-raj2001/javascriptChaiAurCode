let myDate = new Date()


console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23 )  //month 0 se start hote he javascript me 

console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0 , 23, 5, 3 ) 

console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("2023-01-14") 


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth() + 1); //because from 0
console.log(newDate.getDay() + 1); //because from 0
console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: 'Europe'
})          //to local string me ap ek object define karte he so app bahut sare parameters define kar sakte he 


