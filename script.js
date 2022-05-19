const options = ['rock', 'paper', 'scissor'];

let scoreBoard = {
    compScore: 0,
    playerScore: 0
};

let gameSpace = document.getElementById("gameSpace");
let playAgain = document.getElementById("playAgain");
let result = document.querySelector('#result');
let resultAnnouncement = document.getElementById("resultAnnouncement");
let computerEnd = document.getElementById("computerEnd");
let score = document.getElementById("score");

playAgain.addEventListener("click", () => {
    gameSpace.style.visibility = "visible";
    playAgain.style.visibility = "hidden";
    resultAnnouncement.textContent="";
    score.textContent = "";
    computerEnd.textContent = "";
    result.textContent = "";
})
playAgain.style.visibility = "hidden";


function computerPlay() {
    let computerSelection = options[Math.floor(Math.random() * 3)];
    computerEnd.textContent = `the computer chose ${computerSelection}`;
    return computerSelection;
};

function updateScore(winner) {
    if (winner == 'player') {
        scoreBoard.playerScore++;
    } else if (winner == 'comp') {
        scoreBoard.compScore++;
    } else {
        scoreBoard = {
            compScore: 0,
            playerScore: 0
        };
    }
    console.log(scoreBoard);
};

function completionCheck() {
    if (scoreBoard.playerScore >= 5) {
        resultAnnouncement.textContent = 'YOU WIN THIS ROUND';
        updateScore();
        gameSpace.style.visibility = "collapse";
        playAgain.style.visibility = "visible";
    } else if (scoreBoard.compScore >= 5) {
        resultAnnouncement.textContent = 'YOU LOOSE THIS ROUND';
        updateScore();
        gameSpace.style.visibility = "collapse";
        playAgain.style.visibility = "visible";
    }
}

function playRound(playerSelection) {

    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        result.innerHTML = `<center>Its a draw!</center>`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor' ||
        playerSelection == 'scissor' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock') {
        result.innerHTML = `<center>you won. ${playerSelection} beats ${computerSelection}.</center>`;      
        updateScore('player');
    }
    else {
        result.innerHTML = `<center>you lost. ${computerSelection} beats ${playerSelection}.</center>`;
        updateScore('comp');
    }
    completionCheck();
    score.innerHTML = `<center>you're up against the mighty computer: ${scoreBoard.playerScore} to ${scoreBoard.compScore}</center>`;

}


document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});
document.getElementById("scissor").addEventListener("click", () => {
    playRound("scissor");
});
