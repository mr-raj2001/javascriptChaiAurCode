function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}


//we can also declare our own function as prototype

createUser.prototype.increment = function(){
    this.score++
}


createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)

}



// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)



const chai = new createUser("chai", 25)
const tea = new  createUser("tea", 250)

//js hindi notes 






chai.printMe()   //yeh jese hi undefined he   kyuki apne function se iske andar value pass ki apne bataya nahi iske andar yeh additional properties ayi he 
//woh batane ke liye ham new keyoword use karte he 







