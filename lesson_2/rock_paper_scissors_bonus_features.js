/*
**  1. If player a chooses rock and player b chooses scissors, player a wins.
**  2. If player a chooses rock and player b chooses lizard, player a wins.
**  3. If player a chooses paper and player b chooses rock, player a wins.
**  4. If player a chooses paper and player b chooses spock, player a wins.
**  5. If player a chooses scissors and player b chooses paper, player a wins.
**  6. If player a chooses scissors and player b chooses lizard, player a wins.
**  7. If player a chooses lizard and player b chooses paper, player a wins.
**  8. If player a chooses lizard and player b chooses spock, player a wins.
**  9. If player a chooses spock and player b chooses rock, player a wins.
**  10. If player a chooses spock and player b chooses scissors, player a wins.
**  11. If both players choose the same item, neither player wins. It's a tie.
**
** Game is set with 5 rounds
** The user makes a choice.
** The computer makes a choice.
** The winner is displayed for each round.
** User is prompted to play again
** If user plays all 5 rounds, winner is displayed for best out of 5
*/

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const ROUNDS_PER_MATCH = 5;

const SCORES = {
  player: 0,
  computer: 0
};


function welcomePlayer () {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  prompt('Each match is best out of five.');
  prompt('------------------------------------------------\n');
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    SCORES.player += 1;
    prompt('You win!\n');
  }

  if (playerWins(computerChoice, choice)) {
    SCORES.computer += 1;
    prompt("Computer wins!\n");
  }

  if (choice === computerChoice) {
    prompt("It's a tie!\n");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function promptPlayerChoice () {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt('Valid choices can begin with a single letter, but please indicate "sc" for scissors or "sp" for spock');
  let choice = readline.question();
  let validShortformChoices = VALID_CHOICES.map((word) => {
    return word.slice(0, choice.length);
  });

  if (validShortformChoices.includes(choice) && choice === "s") {
    while (choice === "s") {
      prompt('Please indicate "sc" for scissors or "sp" for spock');
      choice = readline.question();
    }
  }

  choice = validatePlayerChoice(choice);
  return choice;
}

function validatePlayerChoice(choice) {
  let validShortformChoices = VALID_CHOICES.map((word) => {
    return word.slice(0, choice.length);
  });

  while ((!VALID_CHOICES.includes(choice) &&
        !validShortformChoices.includes(choice))) {

    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (!VALID_CHOICES.includes(choice)) {
    choice = VALID_CHOICES[validShortformChoices.indexOf(choice)];
  }
  return choice;
}

function displayFinalScore() {
  prompt('FINAL SCORE');
  prompt('-----------');
  prompt(`Player: ${SCORES.player}`);
  prompt(`Computer: ${SCORES.computer}\n`);
  if (SCORES.player > SCORES.computer) {
    prompt("You won the match!!!\n");
  } else if (SCORES.player < SCORES.computer) {
    prompt("Computer won the match!!\n");
  } else {
    prompt("The final tally for all games is a tie!!\n");
  }
}

function resetScores () {
  SCORES.player = 0;
  SCORES.computer = 0;
}

welcomePlayer();

let roundCount = 1;
while (true) {
  do {
    let choice = promptPlayerChoice();

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    displayWinner(choice, computerChoice);

    roundCount += 1;
  } while (roundCount <= ROUNDS_PER_MATCH);

  displayFinalScore();

  prompt("Would you like to play again? y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'n') break;
  resetScores();
  console.clear();
}


