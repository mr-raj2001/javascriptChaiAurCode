//function ka matlab apne 10 line ka code ek package me dal diya he aur usko kahi bhi use kar sakte ho

function sayMyName(){
    console.log('h');
    console.log('i');
    console.log(('t'));
    
    
    
}

sayMyName  //function ka refference

// sayMyName()  //function ka execution


function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);

// let result = number1 + number2
// return result

return number1 + number2

//return ke baad kuch bhi print nahi hoga


   
}

addTwoNumbers(3,4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")

const result = addTwoNumbers(3,5)

// console.log("Result:",result);

function loginUSerMessage(username = "Raj"){   //agar value pass nahi karenge toh default value ayega 

    if(username == undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just  logged in`
}


//console.log(loginUSerMessage("Rishav"));

console.log(loginUSerMessage());  //undefined aye ga 

//js mi undefined ko false mana jata he toh upar wale me if block me (!undefined)

function calculateCartPrice(...num1){  //yaha par yeh rest operator he 
    return num1
}


function calculateCartPrice2(val1,val2,...num1){  //yaha par yeh rest operator he 
    return num1
}

console.log(calculateCartPrice(200, 400, 500));
  // ... yahi tino dot ko rest aur spread operator bola jata he depend karta he kese use ho raha he 

console.log(calculateCartPrice2(200,400,500,2000));  // 200 400 val1 and val2 me chale jayenge 



  //yaha par is rest ka matlab he tumhare pass bahut kudhra saman he usko ek bundle me dal do 


const user = {
    username: "hitesh",
    price: 199
}

function handleUserObject(anyObject){
    console.log(`username is  ${anyObject.username} and price is ${anyObject.price}`);
    
}


handleUserObject(user);

handleUserObject({
    username: "Raj",
    price: 200
})



const myNewArray = [200,400,100,600];

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));




