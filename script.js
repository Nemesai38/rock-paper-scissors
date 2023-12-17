
// Global variables set;
let playerScore = 0;
let computerScore = 0;

// Function to retrieve computer's random option;
function getComputersChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}


// Function to playout one round of computer's random option and players option
// , retrieved through prompt command as declared in Ln 23 below, print a WIN,
// LOSE or TIE option in console and lastly update the respective scores accordingly;
function playRound() {
    const playerschoice = prompt("ROCK, PAPER OR SCISSORS?   PICK ONE! : ");
    const computerschoice = getComputersChoice();
    if (playerschoice.toUpperCase() === 'ROCK' && computerschoice === 'PAPER' ||
        playerschoice.toUpperCase() === 'PAPER' && computerschoice === 'SCISSORS' ||
        playerschoice.toUpperCase() === 'SCISSORS' && computerschoice === 'ROCK') { 
            console.log("You Lose!!"), computerScore += 1;
    }
    if (playerschoice.toUpperCase() === 'PAPER' && computerschoice === 'ROCK' ||
        playerschoice.toUpperCase() === 'SCISSORS' && computerschoice === 'PAPER' ||
        playerschoice.toUpperCase() === 'ROCK' && computerschoice === 'SCISSORS') { 
            console.log("You Win"), playerScore += 1;
    } 
    if (playerschoice.toUpperCase() === 'PAPER' && computerschoice === 'PAPER' ||
        playerschoice.toUpperCase() === 'SCISSORS' && computerschoice === 'SCISSORS' ||
        playerschoice.toUpperCase() === 'ROCK' && computerschoice === 'ROCK') { 
            console.log("TIE, Try Again!!");
    }
}

// Function to play the above playRound() function 5 times and print updated scores 
// in console and will lastly check for winner after the 5 rounds and call the function
// , winner below;
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log('Your score:', {playerScore})
        console.log('Computer score:', computerScore);
    }
    winner();
}

// Winner function will be called by playGame function after the 5 rounds, compare and 
// print designated message for the winner in console;
function winner() {
    if (computerScore > playerScore) {
        console.log("\nThe computer dominated your ass! Better luck next time!!")
    } else if (computerScore < playerScore) {
        console.log("\nWay to crush it! You win!")
    } else {
        console.log("\nHoly shizzers! It's a tie!")
    }
}

playGame();
