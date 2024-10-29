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


const promiseFour = new Promise(function(resolve,reject){
  let error = true;
  
  setTimeout(function(){
    if(!error){
      console.log(
        resolve({username: "Rishav", password: "123"})
      );
      
    }else{
      reject('ERROR: something went wrong')
    }
  },1000)
 
})
  

//niche wale ko const username karke ap console nahi kar sakte he app .chaining karke karenge
 promiseFour.then((user) => {
  console.log(user);
  return user.username
  
}).then((username) => {
  console.log(username);
  
}).catch(function(error){
  console.log(error);
  
}).finally(() => {
  console.log("The promise is finally either resolved or rejected");
  
})

const promiseFive = new Promise(function(resolve,reject){
  let error = true;
  
  setTimeout(function(){
    if(!error){
      console.log(
        resolve({username: "javascript", password: "123"})
      );
      
    }else{
      reject('ERROR: js went wrong')
    }
  },1000)
 
})


//jaruri nahi ,then ya .catch ya ap async await bhi use karsakte ho

//async await me todha gracefully error handle nahi kiya 
  

//promise ek object ap isko consume nahi karte ho ese promisefive()
// async function consumePrmoiseFive() {
//   const reponse = await promiseFive
//   console.log(reponse);
  
// }

//hamne yaha error gracefully handle kar liya he 
async function consumePrmoiseFive() {
  try{
    const reponse = await promiseFive
  console.log(reponse);
  } catch(error) {
    console.log(error)
  }
  
}

consumePrmoiseFive()


async function getAllUsers(){
  try{
    const reponse = await fetch('https://api.github.com/users/mr-raj2001')
    //console.log(reponse);
    
    const data =await reponse.json()   //yeh apka reponse json bhi convert hone me time lagega isiliye yeh ham yaha par bhi await dalenge 
    console.log(data);
  } catch(error){
    console.log(`E: ${error}`);
    
  }
  
  
}

getAllUsers()


fetch('https://api.github.com/users/mr-raj2001').then((respone) => {
  return respone.json()
}).then((data) => {
  console.log(console.log(data));
  

}).catch((error) => {
  console.log(error);   //yeh pehle print hoga par kyu 
  
})
