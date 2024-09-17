const myNums = [1,2,3,4,5,6,7,8,9,10]


const newNums = myNums.map( (num) => num + 10)  //map automatically return karta he like filter aur scope open karega toh return karega like filter


const newNums2 = myNums.map( (num) => num * 10).map( (num) => num + 10).filter((num) => {  //dusre map me woh value ayegi joh upar se pass hua he 
    return num >= 5;
}) //map automatically return karta he like filter aur scope

console.log(newNums2);


//map par jo bhi ho woh return he chahe explicitly ya operation kara ke filter me true or false ka game he 

