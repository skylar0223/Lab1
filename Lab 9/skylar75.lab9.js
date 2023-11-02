function getUserChoice() {
  let userChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
  
  while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
    userChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
  }
  
  return userChoice;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return "User wins!";
  } else {
    return "Computer wins!";
  }
}

function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
  
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playGame();
  } else {
    console.log("Thanks for playing!");
  }
}

playGame();
