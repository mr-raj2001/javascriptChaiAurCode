const coding = ["js", "ruby", "java", "python"]

coding.forEach( function (val) {
    console.log(val);
})

coding.forEach((item, index, arr) => {
    console.log(item, index,arr);
    
})

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)  //bas refference de rahe he execute nahi kar rahe he ()


const myCoding = [
    {lnguagename: "javascript",
        languageFile: "js",
    },
    {lnguagename: "CPP",
        languageFile: "c++",
    },
    {lnguagename: "ruby",
        languageFile: "rb",
    }
]


myCoding.forEach( (item) => {
   console.log(item.lnguagename);
   console.log(item.languageFile);
   
   
})


