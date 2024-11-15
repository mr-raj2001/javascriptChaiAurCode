function setUserName(username){
    this.username = username
}

function createUser(username,email,password){

    //setUserName(username)  yeh bas refference he call karne ke liye .call use karna padega

    setUserName.call(this,username) //call ho raha he par uske andar jitne bhi variables he, context hatte hi gayab ho ja rahe he so app kudh ke this me set na karo apana this muje dedo gayab hone se pehle phir ho jayega 

    this.email = email
    this.password = password

}

const chai = new createUser("chai","chai@fb.com", "124")
console.log(chai);
