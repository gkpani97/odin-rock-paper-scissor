const options = ['rock', 'paper', 'scissor'];

function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection, computerSelection); 

    if (playerSelection === computerSelection) {
        console.log("Its a draw!");
        return 0;
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log(`You Win. ${playerSelection} beats ${computerSelection}.`);
        return 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log(`You Win. ${playerSelection} beats ${computerSelection}.`);
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You Win. ${playerSelection} beats ${computerSelection}.`);
        return 1;
    } else {
        console.log(`You Lost. ${computerSelection} beats ${playerSelection}.`);
        return -1;
    }
}

function game() {
    let playerPoints = 0,
        computerPoints = 0;


    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose rock, paper or scissor!!');
        playerSelection = playerSelection.toLowerCase();

        while (!(options.includes(playerSelection))) {
            playerSelection = prompt('You made a wrong entry. Please, choose rock, paper or scissor!!');
            playerSelection = playerSelection.toLowerCase();
        }

        const winValue = playRound(playerSelection, computerPlay());

        if (winValue === -1) {
            computerPoints++;
        } else if (winValue === 1) {
            playerPoints++;
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
