// // let myName = "hotesh     "

// // console.log(myName.length);


// let myHeroes = ["thor","spiderman"]

// let heroPower ={
//     thor:"hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
        
//     }
// }

// heroPower.hitesh()


//js ka defualt behaviour he prototypal behaviour he woh upar se upar ja rahi he like papa grandpa aur upar upar 

//yeh upar se upar puchegi

//isi ko ham prototypal inheritance bolte he 

 function mulltiplyby5(num){
    return num * 5;
 }

 mulltiplyby5.power = 2  //hanji function bhi object he 

 //js me har chiz object hoti he function function bhi he object bhi he

 //object end of world usko upar null he wese getter setter he par dekhe toh null he 

 //techanicaly function object ho sakta he 


 console.log(mulltiplyby5.prototype); //output yeh hoga {}  by default ek context set hota he aur us propeties ka refference this se karte he 

 
 function createUser(username,score){
    this.username = username
    this.score = score 
 }

 //kya me bhi kudh ka function inject kar sakta hu protoype me 

 createUser.prototype.increment = function(){
    this.score++  //acha isko context nahi pata hoga kisne bulaya he chai ya tea ne so jisne bhi bulaya he uske pas jo woh kese karenge this use kar ke 
 }

//jis ka matlab this 
 createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
 }

 const chai = new createUser("chai", 25) //hamen jab function createUser se chai me value pass ki toh hamne bataya nahi hamare pas yeh additional properties ayi he so woh pata chalega hame new keyword se 

 const tea = new createUser("tea", 250)

 //this se current context set hota he 

 //myArray.protoype.map() yeh nahi karte he kyuki yeh syntatical sugar js deta he muje app bas myArray.map() kijiye

 chai.printMe()

 //js classes ke help se constructor nahi deti he woh object ke help se deti he phir app waha new keyword use karte ho //iske upar wraaper class lga diya he 

 

