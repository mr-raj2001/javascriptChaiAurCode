
//this keyword refers to the current context 



const user = {
    username: "Rishav",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcoome to website`);
        console.log(this);
        
        
    }
}


user.welcomeMessage()
user.username = "Hitesh"


user.welcomeMessage()

//this will take accoutn of current context


console.log(this);

//global me koi context nahi he toh toh sirf this console.log karne se node enviorment me empty object ayega aur browser me window ayega 


// function chai(){
    
//     console.log(this);
    
// }

// chai()


// function chai(){
//     let username = "Rishav",
//     console.log(this.username);
    
// }

// chai()  //this can be only used under objects not functions 

const chai = () => {
    let username = "rishav";
    console.log(this)
}

chai()   //jo log bolte he we cant use this inside arrow function wapas socho

// const addTwo = (num1,num2) => {
//     return num1+ num2;
// }


//implict arrow function

//explict return is you are explicitly using return keyword 


// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2)  //curly braces dalenge toh return keyword ka use karna padega par yaha par tum isse ()  daloge toh return keyword ka use nahi karna padega

const addTwo = () => ({username : "Rishav"})







console.log(addTwo(3,4));




