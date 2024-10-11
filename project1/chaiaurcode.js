const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');
button.forEach(function (button){
    // console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        // if(e.target.id == 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == "yellow"){
        //     body.style.backgroundColor = e.target.id;
        // }
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;    
            default:
                // Optional: handle any other cases
                body.style.backgroundColor = 'black';
                break;
        }
        
    })
})