const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const height =  parseInt(document.querySelector('#height').value);
    console.log(typeof(height));
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height < 0 || height == '' || isNaN(height)){
        result.innerHTML = 'Please add VAlid height';
    }else if(weight < 0 || weight == ' ' || isNaN(weight) ){
        result.innerHTML ='Please add valid weight';
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML =`<span>${bmi}</span>`;
    }



    
})