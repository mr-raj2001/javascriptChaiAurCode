//hame pata he object ka direct access he hamare pass

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

//getownpropertydescriptor hame object ki properties ke bare me batate he jo hame nahi dikh rahe he


//define property to set writable emaunarable 

const chai = {
    name: "ginger",
    price: 250,
    isAvaialble: true
}
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



