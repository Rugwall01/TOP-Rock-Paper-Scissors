
const body = document.querySelector("body");

const menu = document.querySelector("#menu");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const resultsDisp = document.querySelector("#resultsDisp");
const innerDisp = document.querySelector("#innerDisp");

let playerSlection

let userScore = 0;
let compScore = 0;

let userWin
let compWin




function getComputerChoice() {
    let baseRand = Math.floor(Math.random() * 10)
    if(baseRand <= 3) {
        return "ROCK!"
    } else if(baseRand > 3 &&  baseRand <= 6) {
        return "PAPER!"
    } else {
        return "SCISSORS!"
    }
}


function calcWinner(user, computer) {
    if(user == "rock" && computer == "SCISSORS!") {
        return "YOU!"
    } else if(user == "rock" && computer == "PAPER!") {
        return "COMPUTER"
    } else if(user == "rock" && computer == "ROCK!") {
        return "IT'S A TIE!!!!"
    } else if(user == "paper" && computer == "ROCK!") {
        return "YOU!"
    } else if(user == "paper" && computer == "SCISSORS!") {
        return "COMPUTER"
    } else if(user == "paper" && computer == "PAPER!") {
        return "IT'S A TIE!!!!"
    } else if(user == "scissors" && computer == "PAPER!") {
        return "YOU!"
    } else if(user == "scissors" && computer == "ROCK!") {
        return "COMPUTER"
    } else if(user == "scissors" && computer == "SCISSORS!") {
        return "IT'S A TIE!!!!"
    }

}

function addPoints(win) {
    if(win == "YOU!") {
        userScore += 1
        console.log("You just won 10 points!!")
    } else if(win == "COMPUTER") {
        compScore += 1
        console.log("Yikes! The computer just won 10 points.")
    } else {
        console.log("No points awarded")
    }
    
}


function dispWinner(user1, comp1) {
        if(user1 > comp1) {
            alert(`YOU won the game!\n Your final score is: ${userScore}`);
            console.log(`YOU won the game! Your final score is: ${userScore}`);
            userWin = `YOU won the game! Your final score is: ${userScore}, the computer scored: ${compScore}`;
            const dispWinU = document.createElement('div');
            dispWinU.textContent += ` \n ${userWin}`; 
            body.appendChild(dispWinU); 
        } else {
            alert(`The Computer won the game!\n It's final score is: ${compScore}`);
            console.log(`The Computer won the game! It's final score is: ${compScore}`);
            compWin = `The Computer won the game! It's final score is: ${compScore}, you scored: ${userScore}`;
            const dispWinC = document.createElement('div');
            dispWinC.textContent = ` \n ${compWin}`
            body.appendChild(dispWinC);
        }
    }



menu.addEventListener('click', (e) => {
    let target = e.target;
    playerSlection = target.id
    if(userScore == 5 || compScore == 5){
        location.reload();
    }

    switch(target.id) {
        case 'rock':
            console.log(`Your choice was Rock!`);
            break;
        case 'paper': 
            console.log(`Your choice was Paper!`);
            break;
        case 'scissors':
            console.log(`Your choice was Scissors! The `)
            break;
    } 

    let computer = getComputerChoice();

    let winner = calcWinner(playerSlection, computer);
    
    addPoints(winner);
    

    para = document.createElement('p');
    para.textContent = `The winner of this round is: ${winner}! You threw ${playerSlection.toUpperCase()}! The computer threw ${computer}!`;
    
    innerDisp.innerText = `User: ${userScore}\n Computer: ${compScore}`;
    
    innerDisp.appendChild(para);

    if(userScore == 5 || compScore == 5){
        
        dispWinner(userScore, compScore);
    }


});
