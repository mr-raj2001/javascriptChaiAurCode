//const tinder = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rishav"
tinderUser.isLoggedIn = false

// console.log(tinder);

const regularUSer = {
    email:"some@gmail.com",
    fullname: {
        userfullName: {
            firstName: "hitesh",
            lastName: "Choudhary"
        }
    }
}

console.log(regularUSer.fullname?.userfullName.firstName);  //? optional chaining 

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"

}

const obj4 = {
    5: "a",
    6: "b"

}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)  //{}  optional he but preferrable he 


//Object.assign({target,source})


const obj3 = {...obj1,...obj2}



console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hc@gmail.com"
    },
    {
        id: 3,
        email: "hty@gmail.com"
    }

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    coursePrice: "999",
    courseinstructor: "Rishav"
}



const {courseinstructor: instrutor} = course

console.log(instrutor);


// const navabar = ({company}) => {
//  //yaha destructring kiya ja raha he yeh example react ka he 
// }


// navabar(company = "hitesh")

// {
//     "name": "Rishav",
//     "courseName": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
