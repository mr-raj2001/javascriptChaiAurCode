class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
       return this._password.toUpperCase()
    }

    set password(value){
          this._password = value;
    }
}

const hitesh = new User("h@histesh.ai", "abc")
console.log(hitesh.password);


//constructor or setter me race lag jati he value set karne ke liye jiske liye hame error ata he maximum call stack size exceded 
//isko overcome karne liye almost naya variable bana do 


