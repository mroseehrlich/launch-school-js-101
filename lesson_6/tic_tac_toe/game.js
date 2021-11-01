const readline = require('readline-sync');
const joinOr = require('./joinOr');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const WINNING_SCORE = 5;

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}


function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}


function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt('Sorry, that is not a valid choice.');
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  // offence
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = computerDefendsSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense
  if (!square) {
    for (let idx = 0; idx < WINNING_LINES.length; idx++) {
      let line = WINNING_LINES[idx];
      square = computerDefendsSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  // random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }


  board[square] = COMPUTER_MARKER;
}

function computerDefendsSquare(line, board, marker) {
  let markerInLine = line.map(square => board[square]);

  if (markerInLine.filter(
    squareValue => squareValue === marker).length === 2
  ) {
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);

    if (emptySquare !== undefined) {
      return emptySquare;
    }
  }

  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (board[sq1] === COMPUTER_MARKER &&
              board[sq2] === COMPUTER_MARKER &&
              board[sq3] === COMPUTER_MARKER) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let score = {
    player: 0,
    computer: 0
  };

  let playGame;
  let matchNumber = 1;

  while (true) {
    let board = initializeBoard();
    displayBoard(board);

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      score[detectWinner(board).toLowerCase()] += 1;

      if (matchNumber >= 2) {
        prompt(`The current score is:`);
        prompt(`Player: ${score.player}`);
        prompt(`Computer: ${score.computer}`);
      }

    } else {
      prompt('It\'s a tie!');
    }

    matchNumber += 1;

    if (score.player < WINNING_SCORE || score.computer < WINNING_SCORE) {
      prompt('Play again? (y or n)');
      playGame = readline.question().toLowerCase()[0];
      if (playGame !== 'y') break;
    } else {
      let winner = Object.entries(score)
        .filter(score => score[1] === WINNING_SCORE)[0][0];
      let capitalizedWinner = winner[0].toUpperCase().concat(winner.slice(1));
      prompt(`${capitalizedWinner} won the match!`);
      break;
    }
  }

  if (playGame !== 'y') break;

  prompt('Play another match? (y or n)');
  playGame = readline.question().toLowerCase()[0];
  if (playGame !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
