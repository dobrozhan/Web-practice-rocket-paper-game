let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == 'r') return 'Rock';
    if (letter == 'p') return 'Paper';
    return 'Scissors';
}

function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'computer'.fontsize(3).sub();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallComputerWord}. You Win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'computer'.fontsize(3).sub();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallComputerWord}. You Lost!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'computer'.fontsize(3).sub();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} equals to ${convertToWord(computer)}${smallComputerWord}. It's a Draw!`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    rockDiv.addEventListener('click', () => {
        game('r');
    });

    paperDiv.addEventListener('click', () => {
        game('p');
    });

    scissorsDiv.addEventListener('click', () => {
        game('s');
    });
}

main();
