
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

/* To Display Result on Screen by editing DOM */

const displayResult = document.querySelector('.scores');

const para = document.createElement('p');
para.style.margin = '0px';
para.style.whiteSpace = 'pre-wrap';
para.textContent = '';
displayResult.appendChild(para);

const computersplay = document.querySelector('#last');
const compschoice = document.createElement('p')
compschoice.style.textAlign = 'center';
compschoice.style.whiteSpace = 'pre-wrap';
compschoice.style.fontSize = '2rem';
compschoice.textContecnt = '';
computersplay.appendChild(compschoice);

const playersplay = document.querySelector('#first');
const plyrschoice = document.createElement('p')
plyrschoice.style.textAlign = 'center';
plyrschoice.style.whiteSpace = 'pre-wrap';
plyrschoice.style.fontSize = '2rem';
plyrschoice.textContecnt = '';
playersplay.appendChild(plyrschoice);

// Function to playout one round of computer's random option and players option
// , print a WIN, LOSE or TIE option, update the respective scores accordingly;
// and lastly states winner on the first five wins.
function playRound(playerschoice) {
    const computerschoice = getComputersChoice();
    if (playerschoice === 'ROCK' && computerschoice === 'PAPER' ||
        playerschoice === 'PAPER' && computerschoice === 'SCISSORS' ||
        playerschoice === 'SCISSORS' && computerschoice === 'ROCK') { 
            computerScore += 1, para.textContent = 'You Lose', 
            compschoice.textContent = 'Computer played \n' + computerschoice,
            plyrschoice.textContent = 'You played \n' + playerschoice;
    }
    if (playerschoice === 'PAPER' && computerschoice === 'ROCK' ||
        playerschoice === 'SCISSORS' && computerschoice === 'PAPER' ||
        playerschoice === 'ROCK' && computerschoice === 'SCISSORS') { 
            playerScore += 1, para.textContent = 'You Win';
            compschoice.textContent = 'Computer played \n' + computerschoice,
            plyrschoice.textContent = 'You played \n' + playerschoice;
    } 
    if (playerschoice === 'PAPER' && computerschoice === 'PAPER' ||
        playerschoice === 'SCISSORS' && computerschoice === 'SCISSORS' ||
        playerschoice === 'ROCK' && computerschoice === 'ROCK') { 
            para.textContent = "IT'S A TIE,\nTry Again!!";
            compschoice.textContent = 'Computer played \n' + computerschoice,
            plyrschoice.textContent = 'You played \n' + playerschoice;
    }
    console.log(computerschoice);
    const writtenScores = document.querySelector('#scores');
    writtenScores.textContent = playerScore + ' - ' + computerScore;

   /* Function to detect winner */ 
    function winner() {
        if (playerScore === 5) {
            para.textContent = 'CONGRATULATIONS\nWay to Crush it!!\nYou Won the Game'
        } else if (computerScore === 5) {
            para.textContent = 'Comp dominated your ass!!\nBETTER LUCK NEXT TIME'
        }
    }

    if (playerScore === 5 || computerScore === 5) {    
        winner();
    }
    
}

/* Buttons to Select Players Choice */

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => {
    return playRound('ROCK')});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', () => {
    return playRound('PAPER')});

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', () => {
    return playRound('SCISSORS')});
