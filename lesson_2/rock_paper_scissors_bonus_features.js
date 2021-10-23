const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  }

  if (playerWins(computerChoice, choice)) {
    prompt("It's a tie!");
  }

  if (choice === computerChoice) {
    prompt("Computer wins!");
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


