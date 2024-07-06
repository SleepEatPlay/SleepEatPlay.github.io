let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('guess').disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = 'Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Try a lower number.';
    }
}
