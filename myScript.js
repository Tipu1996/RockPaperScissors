let choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;
let ties = 0;

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const resultDiv = document.createElement("div");
body.appendChild(resultDiv);

let singleRound = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return "Tie! Try Again";
	} else if (userChoice === "rock" && computerChoice === "paper") {
		return 0;
	} else if (userChoice === "rock" && computerChoice === "scissors") {
		return 1;
	} else if (userChoice === "paper" && computerChoice === "rock") {
		return 1;
	} else if (userChoice === "paper" && computerChoice === "scissors") {
		return 0;
	} else if (userChoice === "scissors" && computerChoice === "rock") {
		return 0;
	} else if (userChoice === "scissors" && computerChoice === "paper") {
		return 1;
	}
};

const handleRound = (userChoice) => {
	let getComputerChoice = () => Math.floor(Math.random() * 3);
	let computerChoice = choices[getComputerChoice()];
	let singleRoundResult = singleRound(userChoice, computerChoice);
	if (singleRoundResult === 0) computerWins++;
	else if (singleRoundResult === 1) playerWins++;
	else ties++;
	console.log(playerWins + computerWins + ties);
	if (playerWins === 5 || computerWins === 5) {
		displayResult(playerWins, computerWins);
	}
};

let userChoice = null;

const displayResult = (playerWins, computerWins) => {
	if (playerWins > computerWins) resultDiv.textContent = "Winner: Player";
	else if (computerWins > playerWins)
		resultDiv.textContent = "Winner: Computer";
	else resultDiv.textContent = "It's a tie";
};

rock.addEventListener("click", () => handleRound("rock"));
paper.addEventListener("click", () => handleRound("paper"));
scissors.addEventListener("click", () => handleRound("scissors"));
