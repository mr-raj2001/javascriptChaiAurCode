const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    //Db calls,cryptography, network
    

    setTimeout(function(){
      console.log('Async task is complete');
      resolve()   //ab jake yeh connect hua .then isme app parameters bhi pass karsakte he 
    },1000)
})

//resolve ka connection he .then ke sath
 

//niche wala function automatic yeh argument recieve karta he jo upar se aya he 


promiseOne.then(function(){
     console.log('Promise consumed');
     
})

new Promise(function(resolve,reject){
   setTimeout(function(){
     console.log("Async task 2");
     resolve()
     
   },1000)
}).then(function(){
    console.log("Async 2 is resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "Rishav", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new 