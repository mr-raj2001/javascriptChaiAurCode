//singleton 
//koi bhi constructor se object banatae he woh aone tarah ka ek object he 

//literal se singleton nahi banega 
//object literals

//object.create this is the constructor method which creates singleton 

const mysum = Symbol("key1")

const JsUser = {
    name: "Rishav",
    "full name" : "Rishav Raj",
    //by default name process karta he system as a string jo ki key he 
    [mysum] : "mykey1",   //this is how we use symbol 
    mysum : "mykey2",

    age:18,
    location: "India",
    email: "rishav@google.com",
    isLoggedIn: false,
    LastLoginDays: ['Monday','Tuesday']

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //to usko . se access nahi kar sakte ho 
console.log(JsUser[mysum]);


JsUser.email = "rishav@calsoftinc.com"

//Object.freeze(JsUser)

console.log(JsUser);  //kar cosnole dekh 

JsUser.greeting = function(){
    console.log("Hello js user");
    
}


console.log(JsUser.greeting());

//console.log(JsUser.greeting);



JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    

}


console.log(JsUser.greetingTwo());






