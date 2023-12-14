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

//function getPlayersChoice() {
    //return prompt("What is you name?:  ")
//}

function compare(playerschoice, computerschoice) {
    if (playerschoice === computerschoice) {
        console.log("correct")
    }
    if (playerschoice !== computerschoice) {
        console.log("incorrect")
    }
}

const playerschoice = 'ROCK';
const computerschoice = getComputersChoice();
console.log(compare(playerschoice, computerschoice))
