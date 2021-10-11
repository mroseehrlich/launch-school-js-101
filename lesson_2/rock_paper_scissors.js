const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

/*
**  1. If player a chooses rock and player b chooses scissors, player a wins.
**  2. If player a chooses paper and player b chooses rock, player a wins.
**  3. If player a chooses scissors and player b chooses paper, player a wins.
**  4. If both players choose the same item, neither player wins. It's a tie.
**
** The user makes a choice.
** The computer makes a choice.
** The winner is displayed.
*/

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? y/n");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'n') break;
}


