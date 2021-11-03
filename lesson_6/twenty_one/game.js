const readline = require('readline-sync');

const CARDS = [
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'],
  ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'],
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'],
  ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'],
  ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'],
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'],
  ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'],
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > 21;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function dealHand(deck, hand) {
  hand.push(deck.pop(), deck.pop());
  return hand;
}

function displayCardValues(cards) {
  let cardValues = cards.map(card => card[1]);

  if (cardValues.length === 2) {
    return cardValues.join(' and ');
  }

  return cardValues.slice(0, cards.length - 1).join(', ') + ' and ' + cardValues[cardValues.length - 1];
}

function checkResult(playerTotal, dealerTotal) {

  if (playerTotal > 21) {
    return 'PLAYER_BUST';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUST';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerTotal, dealerTotal) {
  let result = checkResult(playerTotal, dealerTotal);

  switch (result) {
    case 'PLAYER_BUST':
      return prompt('You busted! Dealer wins!');
    case 'DEALER_BUST':
      return prompt('Dealer busted! You win!');
    case 'PLAYER':
      return prompt('You win!');
    case 'DEALER':
      return prompt('Dealer wins!');
    case 'TIE':
      return prompt('It\'s a tie!');
  }

  return null;
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().trim().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('That is not a valid input. Please entire "y" or "n".');
    answer = readline.question().trim().toLowerCase();
  }

  return answer === 'y';
}

function endRound(playerHand, playerTotal, dealerHand, dealerTotal) {
  console.log('================================');
  prompt(`Player has ${displayCardValues(playerHand)} for a total of ${playerTotal}`);
  prompt(`Dealer has ${displayCardValues(dealerHand)} for a total of ${dealerTotal}`);
  displayResult(playerTotal, dealerTotal);
  console.log('================================');
}

do {
  let deck = shuffle(CARDS);

  let playerHand = dealHand(deck, []);
  let dealerHand = dealHand(deck, []);
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  // player turn

  prompt(`Dealer has: ${dealerHand[0][1]} and unknown card`);

  while (true) {
    prompt(`You have: ${displayCardValues(playerHand)} for a total of ${playerTotal}`);

    if (!busted(playerTotal)) {
      prompt('hit or stay?');
      let answer = readline.question();
      if (answer === 'stay') break;

      if (answer === 'hit') {
        playerHand.push(deck.pop());
        playerTotal = total(playerHand);
      }
    } else break;
  }

  if (busted(playerTotal) ) {
    endRound(playerHand, playerTotal, dealerHand, dealerTotal);
    continue;
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  // dealer turn
  prompt('Dealer turn...');

  while (dealerTotal < 17) {
    prompt(`Dealer hits!`);
    dealerHand.push(deck.pop());
    prompt(`Dealer has: ${displayCardValues(dealerHand)}.`);
    dealerTotal = total(dealerHand);
  }

  if (busted(dealerTotal)) {
    endRound(playerHand, playerTotal, dealerHand, dealerTotal);
    continue;
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  endRound(playerHand, playerTotal, dealerHand, dealerTotal);
} while (playAgain());
