
let choice = prompt(`DO YOU WANT TO PLAY ROCK PAPER SCISSORS?\nType a response: "1" for YES  or  "2" for NO`);

while (choice !== "1" && choice !== "2") {
  choice = prompt("Invalid choice. Please enter 1 or 2:");
}

switch (choice) {
  case "1":
    playGame()
    break;
  case "2":
    alert("Ok, Goodbye now!!")
    console.log("Ok, Goodbye now!!")
    break;
}

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

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, Scissors?: ");
    userChoice = userChoice.toUpperCase();
    if(!userChoice.includes("ROCK") && !userChoice.includes("PAPER") && !userChoice.includes("SCISSORS")) {
        alert("Please enter a valid choice.");
        getUserChoice();
    } else {
        return userChoice
    }

}
//The below function is made in this manner to allow flexibility in the user input
//These statements are not mirrors of eachother and the user input is only checked to see
//If it contains a valid substring (Could potentially enter two answers that would both be valid, in this case the program selects one but I dont know how it determines which one to select)
function calcWinner(user, computer) {
    if(user.includes("ROCK") && computer == "SCISSORS!") {
        return "YOU!"
    } else if(user.includes("ROCK") && computer == "PAPER!") {
        return "COMPUTER"
    } else if(user.includes("ROCK") && computer == "ROCK!") {
        return "IT'S A TIE!!!!"
    } else if(user.includes("PAPER") && computer == "ROCK!") {
        return "YOU!"
    } else if(user.includes("PAPER") && computer == "SCISSORS!") {
        return "COMPUTER"
    } else if(user.includes("PAPER") && computer == "PAPER!") {
        return "IT'S A TIE!!!!"
    } else if(user.includes("SCISSORS") && computer == "PAPER!") {
        return "YOU!"
    } else if(user.includes("SCISSORS") && computer == "ROCK!") {
        return "COMPUTER"
    } else if(user.includes("SCISSORS") && computer == "SCISSORS!") {
        return "IT'S A TIE!!!!"
    }

}

function addPoints(win) {
    if(win == "YOU!") {
        userScore += 10
        console.log("You just won 10 points!!")
    } else if(win == "COMPUTER") {
        compScore += 10
        console.log("Yikes! The computer just won 10 points.")
    } else {
        console.log("No points awarded")
    }
}

function dispWinner(user1, comp1) {
    if(user1 > comp1) {
        alert(`You won the GAME!\n Your final score is: ${finalUserScore}`);
        console.log(`You won the GAME! Your final score is: ${finalUserScore}`);  
    } else {
        alert(`The Computer won the GAME!\n It's final score is: ${finalCompScore}`);
        console.log(`The Computer won the GAME! It's final score is: ${finalCompScore}`);
    }
}

function playRound() {
    userScore = 0;
    compScore = 0;
    let human = getUserChoice();
    let comp = getComputerChoice();
    console.log(("You: " + human + "! ") + ("Computer: " + comp));
    winner = calcWinner(human, comp);
    console.log(`The winner of this round is: ${winner}`);
    addPoints(winner);
}

function playGame() {
    console.log("LET'S BEGIN!!!!")
    finalUserScore = 0
    finalCompScore = 0
    for(let i = 1; i < 6; i++) {
        playRound()
        finalUserScore += userScore;
        finalCompScore += compScore
    }
    console.log(`YOU: ${finalUserScore}`);
    console.log(`COMPUTER: ${finalCompScore}`);
    dispWinner(finalUserScore, finalCompScore);
}