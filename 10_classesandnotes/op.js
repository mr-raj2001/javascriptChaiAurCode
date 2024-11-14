// objet literals

const user = {
    username: "hitesh",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user deatils from db");
        console.log(this.username)
        console.log(this); //yeh current context print karega

    } 
}

console.log(user.username);
console.log(user.getUserDetails());

//ab jab bhi this keyword use karte ho toh ab current context ki baat kar rahe ho

console.log(this) //yaha empty paranthesis ayegi kyuki global context khali he 

const promiseOne = new Promise()  //yeh new keyword ek constructor function he yeh ek instance se multiple object literal banadeta he 

function User(username,logincount,isLoggedIn){
    this.username = username   //this.username ek variable iske jagah ap myusername bhi use kar sakte ho
    this.loginCount = logincount
    this.isLoggedIn = isLoggedIn


    //return this //yeh aplikho ya nahi yeh implicitly define hota hi he 
}

// const userOne = user("rishav", 8, true);
// const userTwo = user("hitesh", 12,false);  //yeh value override kar dega useOne ka  isiliye ham constructor function use karte he


 const userOne = new user("rishav", 8, true);
 const userTwo = new user("hitesh", 12,false); 
console.log(userOne);
console.log(userOne.isLoggedIn)

//steps for working of new keyword


//new keyboard use karne par sabse pehle ek empty object create hota he jisse instance kehte he 

//2nd step ek constructor function call hota he yeh new keyowrd ke wajah se yeh function sare arguments bundle karke apko ek sath bhej deta he 

//3rd step this keyowrd yeh woh sab this ke andar inject hojata he 

//apko mil jata he 

console.log(userOne.constructor);  //iske andar ek function ayega 

//read about instance of 



