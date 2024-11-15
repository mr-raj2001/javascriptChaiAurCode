class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
   //ab kayi bar is method ka access us object ko nahi dena chahate he jo is class se intitate hota he uske liye static laga do 
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")


console.log(  hitesh.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@.com")
 iphone.logMe();

 // console.log(iphone.staticId()); //acess nahi kar sakta he yeh 

 
 

