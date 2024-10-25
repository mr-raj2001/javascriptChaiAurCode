function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;
document.querySelector('#start').addEventListener('click', function() {
    interval = setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(interval);
} )
