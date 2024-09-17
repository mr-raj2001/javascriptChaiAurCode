// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item //undefined 
    
// })

// //for each will not return values



// console.log(values);  // it will give undefined




const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = myNumbers.filter( (num) =>  num > 4)

console.log(result);


//filter will return values only which condition will be satisitified

const newNums = myNumbers.filter( (nums) => {
     return nums > 4  //yaha return keyword likhna padega because apne scoe shuu kar diya he 
})

console.log(newNums);

const newNums2 = []

myNumbers.forEach( (num) => { 
    if(num > 4){
        newNums2.push(num)
    }
});


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre == 'History' )

  //console.log(userBooks);

  userBooks = books.filter((bk) => {
    
    return bk.publish > 2000 && bk.genre == 'Science'});  //naya scope khol diya he so return use kiya he 
  
  console.log(userBooks);
  