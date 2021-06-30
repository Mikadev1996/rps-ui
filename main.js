const roundText = document.querySelector("#round");
let roundScore = 1;
roundText.textContent = `Round: ${roundScore}`;

const userText = document.getElementById("user-score")
let userScore = 0;
userText.textContent = `User score: ${userScore}`;


const computerText = document.querySelector("#computer-score");
let computerScore = 0;
computerText.textContent = `Computer score: ${computerScore}`


    function computerPlay() {
    let numberIndicator = (Math.round(Math.random() * 2 + 1));
    switch (numberIndicator) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Error";
    }
}

const choices = Array.from(document.querySelectorAll(".choices"));

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        let playerSelect = e.target.id.toString();
        playRound(computerPlay(), playerSelect);
    });
});



function playRound(computerChoice, playerChoice) {
    roundScore++;
    roundText.textContent = `Round: ${roundScore}`;

    if (playerChoice === computerChoice) {
        roundText.style.backgroundColor = "orange";

    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        userScore += 1;
        userText.textContent = `User score: ${userScore}`;
        roundText.style.backgroundColor = "green";

    } else {
        computerScore += 1;
        computerText.textContent = `Computer score: ${computerScore}`
        roundText.style.backgroundColor = "darkred";
    }



    if ((computerScore === 5) || (userScore === 5)) {
        let winner = (userScore > computerScore) ? "You won!" : "The computer beat you :("
        computerScore = 0;
        userScore = 0;
        roundText.textContent = `${winner}`;
        setTimeout(() => {
            roundScore = 1;
            roundText.textContent = `Round: ${roundScore}`
            computerText.textContent = `Computer score: ${computerScore}`
            userText.textContent = `User score: ${userScore}`;
            roundText.style.background = "rgba(0, 0, 0, 0.14)";
        }, 2500)
    }
}
