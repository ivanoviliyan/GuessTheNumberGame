let computerGuess = Math.floor(Math.random() * 100);

let checkBtn = document.getElementById('check-btn');
let output = document.getElementById('output');
let newGameBtn = document.getElementById('new-game-btn');
let giveUpBtn = document.getElementById('give-up-btn');
let playerGuess = '0';

function timeout() {
	setTimeout(() => {
		document.getElementById('numberEl').value = '0';
		location.reload();
	}, 2500);
}

newGameBtn.addEventListener('click', () => {
	location.reload();
});

giveUpBtn.addEventListener('click', () => {
	output.textContent = `The number was ${computerGuess}!`;
	timeout();
});

checkBtn.addEventListener('click', () => {
	playerGuess = document.getElementById('numberEl').value;
	if (playerGuess < 0 || playerGuess > 100) {
		output.textContent = `Out of range!`;
		return;
	}
	if (playerGuess == computerGuess) {
		output.textContent = `Win! You guess the number ${computerGuess}!`;
		timeout();
	} else if (playerGuess < computerGuess) {
		output.textContent = `Nope! Enter higher number!`;
	} else if (playerGuess > computerGuess) {
		output.textContent = `Nope! Enter lower number!`;
	}
});
