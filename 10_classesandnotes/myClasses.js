//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){   //yeh function he tab bhi function keyword use nahi kar rahe he toh 
       return `${this.password}abc`  
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scene upar ka 

function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());
