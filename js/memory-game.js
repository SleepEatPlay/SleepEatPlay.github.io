const cardDeck = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];
let flippedCards = [];
let matchedCards = [];
let gameStarted = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        shuffledDeck = shuffle(cardDeck);
        const gameBoard = document.getElementById('game');

        shuffledDeck.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.value = card;
            cardElement.textContent = card;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
        flippedCards.forEach(card => card.classList.add('matched'));
        matchedCards.push(...flippedCards);
    } else {
        flippedCards.forEach(card => card.classList.remove('flipped'));
    }

    flippedCards = [];
    checkWin();
}

function checkWin() {
    if (matchedCards.length === cardDeck.length) {
        alert('Congratulations! You matched all the cards!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-game').addEventListener('click', startGame);
});
