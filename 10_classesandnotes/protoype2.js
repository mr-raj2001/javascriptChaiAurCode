let myName = "Rishav    "

console.log(myName.length);


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
    
    
}

"iceTea   ".trueLength()

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    //method inject karunga
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects');
    
}

heroPower.hitesh();
myHeroes.hitesh(); //kyuki object se hoke jayega aur apne ibject me hi nayi propety add kar di


//agar apne koi chiz array me inject ki he toh kya woh object me jayega 

Array.prototype.heyhitesh = function(){
    console.log('hitesh says high');
    
}

//heroPower.heyhitesh()
myHeroes.hitesh();


//inheritance


//__proto__: TeachingSupport //iaka matlab he Teaching support object ke properties bhi apko avaialble ho jaye 

//Teacher.__proto__ = User //teacher bhi user ki sari properties access kar sakta he 

//toh yahi prototypal inheritance he 


//par is achi approach he

//modernSyntax

//Object.setPrototypeOf(TeachingSupport, Teahcer) //TeachingSupport teacher ki access kar leta he 

