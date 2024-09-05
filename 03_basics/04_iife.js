//Immedaitely Invoked Function Expression (IIFE)

//we want to immediately execute a function and we dont want pollution from global scope

(function chai(){
    console.log('DB Connected');
    
})();

( (name) => {
    console.log(`DB connected two ${name}`);
    
})("Rishav")


//iife ko pata nahi hota he context kaha rokna hota he isiliye we need to use ; to use multiple iife




