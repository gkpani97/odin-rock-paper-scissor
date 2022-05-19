const options = ['rock', 'paper', 'scissor'];

let scoreBoard = {
    compScore: 0,
    playerScore: 0
};


function computerPlay() {
    let computerSelection = options[Math.floor(Math.random() * 3)];
    document.getElementById("computerEnd").textContent = `the computer chose ${computerSelection}.`;
    return computerSelection;
};


let result = document.querySelector('#result');
result.innerHTML = "<center>result</center>";

function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection, computerSelection); 

    if (playerSelection === computerSelection) {
        result.innerHTML = "<center>Its a draw!</center>";
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        result.innerHTML = `<center>you won. ${playerSelection} beats ${computerSelection}.</center>`;
        scoreBoard.playerScore++;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        result.innerHTML = `<center>you won. ${playerSelection} beats ${computerSelection}.</center>`;
        scoreBoard.playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.innerHTML = `<center>you won. ${playerSelection} beats ${computerSelection}.</center>`;
        scoreBoard.playerScore++;
    } else if (playerSelection == '' ) {
        result.innerHTML = `<center>you lost. you gave up, or were too late.</center>`;
        scoreBoard.compScore++;
    } else {
        result.innerHTML = `<center>you lost. ${computerSelection} beats ${playerSelection}.</center>`;
        scoreBoard.compScore++;
    }
    console.log(scoreBoard)
}


let instructions = document.getElementById("instructions");

function game() {

    console.log(instructions)
    instructions.textContent = "lets begin.... whoever gets to 5, takes the win.";

    let gameOver = false;
    let i = 0;

    while (!gameOver) {
        instructions.innerHTML = `<span style="color:red;">round ${i}:<span> take a bet.`;

        var timeleft = 10;
        var stopWatch = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(stopWatch);
                playRound("", computerPlay());
                timeleft = 10;
            }

            document.getElementById("timer").textContent = `quick. only ${timeleft} seconds left.`;
            document.getElementById("progressBar").value = 10 - timeleft;
            timeleft -= 1;

            document.getElementById("rock").addEventListener("click", () => {
                playRound("rock", computerPlay());
                clearInterval(stopWatch);
            });

            document.getElementById("paper").addEventListener("click", () => {
                playRound("paper", computerPlay());
                clearInterval(stopWatch);
            });

            document.getElementById("scissor").addEventListener("click", () => {
                playRound("scissor", computerPlay());
                clearInterval(stopWatch);
            });

        }, 1000);

        if (scoreBoard.compScore = 5) {
            result.textContent = 'YOU LOOSE THIS ROUND';
            gameOver = true;
        }
        else if (scoreBoard.playerScore) {
            result.textContent = 'YOU WIN THIS ROUND';
            gameOver = true;
        }

    }


    console.log(`ComputerPoints: ${computerPoints}, PlayerPoints: ${playerPoints}`);
    // console.log(playerPoints > computerPoints)


    if (playerPoints > computerPoints) {
        console.log("YOU WIN THIS ROUND");
    } else if (computerPoints > playerPoints) {
        console.log("YOU LOOSE THIS ROUND")
    } else {
        console.log("ITS A DRAW")
    }

}

game();