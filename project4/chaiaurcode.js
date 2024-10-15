let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guestResult = document.querySelector('.lowOrHi');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');

//let prevGuess = [];
let newGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        const numberInput = parseInt(userInput.value);
        e.preventDefault();
        ValidateNumber(numberInput);
    });
}

function ValidateNumber(number) {
    if (isNaN(number)) {
        alert('Please add a valid number');
    } else if (number < 1) {
        alert('Please add a number more than 1');
    } else if (number > 100) {
        alert('Please add a number less than 100');
    } else {
        prevGuess.push(number);
        if (newGuess === 11) {
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
            displayGuess(number);
        } else {
            displayGuess(number);
            guessNumber(number);
        }
    }
}

function guessNumber(number) {
    if (number === randomNumber) {
        guestResult.innerHTML = "You guessed it right!";
        endGame();
    } else if (number < randomNumber) {
        guestResult.innerHTML = "Your guess is low";
    } else {
        guestResult.innerHTML = "Your guess is high";
    }
}

function displayGuess(number) {
    userInput.value = '';
    guessSlot.innerHTML += `${number}, `;
    newGuess++;
    remainingGuess.innerHTML = `${11 - newGuess} guesses remaining`;
}

function displayMessage(message) {
    guestResult.innerHTML = message;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    playGame = false;
    const restartButton = document.createElement('button');
    restartButton.innerHTML = 'Restart Game';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', () => {
        location.reload();  // Reloads the page to restart the game
    });
}
