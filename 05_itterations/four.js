const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    go: "golang",
}

for (const key in myObject) {
  console.log(key);
  
}

for (const key in myObject) {
      console.log(`${key} shortcut is ${myObject[key]}`);
      
}

const programming = ["js", "py", "rb", "go"]

for (const key in programming) {
   console.log(key);
   console.log(programming[key]);
   
}


//for in keys deta he for of value deta he

// const map = new Map()
// map.set('IN', 'India')
// map.set('US', 'United States')
// map.set('FR', 'France')

// for (const key in map) {
//     console.log(key);
    
// }

//map itterable nahi he 

