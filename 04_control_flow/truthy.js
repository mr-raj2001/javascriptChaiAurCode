//const userEmail = "h@hitesh.ai"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}


// falsy values ------------------
// false , 0, -0,BigInt 0n, "", null, undefined,NaN

// inke alwa sab truthy values


// //truthy values-------------
// "0",'false'," ",[],{}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("its empty");
    
}

//false == 0 it will give true

//false  == '' it will give true

// 0 == '' it will give true

//Nullish Coalescing Operatoe (??) : null undefined

let val1;
//  val1 = 5 ?? 10

 //val1 = null ?? 10  //it will check for null safety check

//  val1 = undefined ?? 15

 val1 = null ?? 10 ?? 20


 console.log(val1);


 //ternary operator 

 condition ? true : false
 
 

