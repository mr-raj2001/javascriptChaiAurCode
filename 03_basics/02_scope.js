
//var c = 300;
let a = 300;

if(true){
    let a = 10
    const b = 20
    //var c = 30  //ya apko ese c = 30

    console.log("Inner:" , a);
    
}


console.log(a);
//console.log(b);
// console.log(c);  //yeh var bahar nahi ana chaiye tha

function one(){
    const username = "Rishav"

    function two(){
        const website = "Youtube"
        console.log(username)
    }

    //console.log(website);

    two()
    
}

one()



if(true) {
    const username = "rishav"
    if(username == "rishav"){
        const website = "youtube"

        console.log(username + website)
    }

   // console.log(website);
    
}

//console.log(username);


//++++++++++++++++++++++++Intresiting+++++++++++++++++++++++++++++++//
addone(5)
function addone(num){
    return num + 1;
}

addTwo(5)  //will give error because we stored in variable 

const addTwo = function(num){
    return num+ 2;
}

//this keyword tells about current context

