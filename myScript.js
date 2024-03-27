let choices = ["rock", "paper", "scissors"];

let singleRound = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		console.log("it's a tie");
		return "Tie! Try Again";
	} else if (userChoice === "rock" && computerChoice === "paper") {
		console.log("computer wins! paper beats rock");
		return 0;
	} else if (userChoice === "rock" && computerChoice === "scissors") {
		console.log("player wins! rock beats scissors");
		return 1;
	} else if (userChoice === "paper" && computerChoice === "rock") {
		console.log("player wins! paper beats rock");
		return 1;
	} else if (userChoice === "paper" && computerChoice === "scissors") {
		console.log("computer wins! scissors beats paper");
		return 0;
	} else if (userChoice === "scissors" && computerChoice === "rock") {
		console.log("computer wins! rock beats scissors");
		return 0;
	} else if (userChoice === "scissors" && computerChoice === "paper") {
		console.log("player wins! scissors beats paper");
		return 1;
	}
};

let playerWins = 0;
let computerWins = 0;

let playGame = () => {
	for (let i = 1; i <= 5; i++) {
		let getComputerChoice = () => Math.floor(Math.random() * 3);
		let computerChoice = choices[getComputerChoice()];
		console.log(computerChoice);
		let userChoice = prompt("enter you choice").toLowerCase();
		let singleRoundResult = singleRound(userChoice, computerChoice);
		if (singleRoundResult === 0) computerWins++;
		else if (singleRoundResult === 1) playerWins++;
	}
	if (computerWins > playerWins) console.log("computer wins!!");
	else console.log("player wins!!");
};

playGame();
