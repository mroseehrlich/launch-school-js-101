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

function busted(cards) {
  return total(cards) > 21;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function dealHand(deck, hand) {
  hand.push(deck.pop());
  return hand;
}

function displayCardValues(cards) {
  let cardValues = cards.map(card => card[1]);

  if (cardValues.length === 2) {
    return cardValues.join(' and ');
  }

  return cardValues.slice(0, cards.length - 1).join(', ') + ' and ' + cardValues[cardValues.length - 1];
}

while (true) {
  let deck = shuffle(CARDS);

  let playerHand = dealHand(deck, []);
  let dealerHand = dealHand(deck, []);

  // player turn

  prompt(`Dealer has: ${dealerHand[0][1]} and unknown card`);

  while (true) {
    playerHand = dealHand(deck, playerHand);
    prompt(`You have: ${displayCardValues(playerHand)}`);

    if (!busted(playerHand)) {
      prompt('hit or stay?');
      let answer = readline.question();
      if (answer === 'stay') break;
    } else break;
  }

  if (busted(playerHand) ) {
    prompt(`Dealer wins`);
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }


  // dealer turn
  while (true) {
    if (total(dealerHand) >= 17) break;
    dealerHand = dealHand(deck, dealerHand);
  }

  if (busted(dealerHand)) {
    prompt('Player wins');
  }

  prompt(`Player score: ${total(playerHand)}`);
  prompt(`Dealer score: ${total(dealerHand)}`);

  if (total(playerHand) > total(dealerHand)) {
    prompt('Player wins!');
  } else if (total(playerHand) < total(dealerHand)) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie!');
  }

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().trim().toLowerCase();
  if (answer !== 'y') break;

}
