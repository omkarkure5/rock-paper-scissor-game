let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drowGame = () => {
    console.log(" Game was Drow");
    msg.innerText = "Game was drow. Play again."
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log('computer choice ', compChoice)

    if (userChoice === compChoice) {
        drowGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
);
});
