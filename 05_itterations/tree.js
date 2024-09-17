//for of

["","","","","","","","",""]
[{},{},{},{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9,10,11]

for (const val of arr) {
    console.log(val);
    
}

const grettings = "Hello world"

//yeh wala object se matlab he kis chiz par loop lagana he

for (const num of grettings) {
    console.log(`Each char is ${num}`);
    
}

//Maps 

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('FR', 'France')


console.log(map);

for (const key of map) {
    console.log(key);
    
}


for (const [key,value] of map) {
    console.log(key, '-', + value);
    
}



const myObject = {
    'gane1' : "NFS",
    'game2' : "FIFA",
    'game3' : "COD",
}

for (const [key,value] of myObject) {
    console.log(key, '-', + value);
    
}


//myObject is not itterable by for loop