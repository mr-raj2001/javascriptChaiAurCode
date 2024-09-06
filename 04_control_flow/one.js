//if

const temperature = 41;

if( 2 === "2"){   //== will evaluate true
  console.log("executed");
  
}


const score = 200


// if(score > 100){
//     const power = "fly"
//     //var power = "fly" //iska scope gloabal he yeh bahar bhi access hoga
//     console.log(`User power: ${power}`);
    
// }

//console.log(`User power: ${power}`);


//short hand notation


// const balance = 1000

// if(balance > 500) console.log('test'); //implict scope ek line me execute hota he multiple line likh sakte he , dal ke phir end me yaad semicolon lagao par not preferable he 

// if(balance < 500){
//    console.log("less than");
   

// }else if(balance < 750) {
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }



const userLoggedIn = true;
const debitCard = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard && 2==2){
    console.log("allowed to buy courses");
    
}


if(userLoggedIn || loggedInFromGoogle){
    console.log("user Logged In");
    
}












