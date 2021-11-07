const readline = require('readline-sync');

const SUITS = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const WINNING_SCORE = 21;
const DEALER_STAYS_SCORE = 17;

const WINNING_MATCH_SCORE = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeDeck() {
  let deck = [];

  for (let suitsIdx = 0; suitsIdx < SUITS.length; suitsIdx++) {
    for (let valuesIdx = 0; valuesIdx < VALUES.length; valuesIdx++) {
      let card = [SUITS[suitsIdx], VALUES[valuesIdx]];
      deck.push(card);
    }
  }

  return deck;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > WINNING_SCORE) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > WINNING_SCORE;
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

function hitOrStay() {
  prompt('Hit or stay?');
  let answer = readline.question().trim().toLowerCase();

  while (answer !== 'hit' && answer !== 'stay') {
    prompt('That is not a valid answer. Please enter "hit" or "stay".');
    answer = readline.question().trim().toLowerCase();
  }

  return answer;
}

function displayCardValues(cards) {
  let cardValues = cards.map(card => card[1]);

  if (cardValues.length === 2) {
    return cardValues.join(' and ');
  }

  return cardValues.slice(0, cards.length - 1).join(', ') + ' and ' + cardValues[cardValues.length - 1];
}

function checkResult(playerTotal, dealerTotal) {

  if (playerTotal > WINNING_SCORE) {
    return 'PLAYER_BUST';
  } else if (dealerTotal > WINNING_SCORE) {
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

function detectMatchWinner(playerTotal, dealerTotal) {
  let result = checkResult(playerTotal, dealerTotal);

  if (result === 'DEALER_BUST' || result === 'PLAYER') {
    return 'player';
  } else if (result === 'PLAYER_BUST' || result === 'DEALER') {
    return 'dealer';
  }

  return null;
}

function displayMatchWinner(match) {
  console.log('================================');
  prompt(`Match Score:`);
  prompt(`Dealer won ${match.dealer} rounds`);
  prompt(`Player won ${match.player} round`);

  if (match.player > match.dealer) {
    prompt('Player wins match!');
  } else if (match.dealer > match.player) {
    prompt('Dealer wins match!');
  } else {
    prompt('Final match score is a tie!');
  }
  console.log('================================');
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

function endRound(player, dealer, match) {
  console.log('================================');
  prompt(`Player has ${displayCardValues(player.hand)} for a total of ${player.total}`);
  prompt(`Dealer has ${displayCardValues(dealer.hand)} for a total of ${dealer.total}`);
  displayResult(player.total, dealer.total);
  console.log('================================');

  let winner = detectMatchWinner(player.total, dealer.total);
  match[winner] += 1;
}


function initializeMatch() {
  return {
    match: {
      player: 0,
      dealer: 0
    },
    currentRound: {}
  };
}

function resetRound() {
  return {
    player: {
      hand: [],
      total: 0
    },
    dealer: {
      hand: [],
      total: 0
    },
  };
}

do {
  let scores = initializeMatch();
  let {match} = scores;

  while (
    match.player < WINNING_MATCH_SCORE &&
    match.dealer < WINNING_MATCH_SCORE
  ) {
    scores.currentRound = resetRound();
    let deck = initializeDeck();
    deck = shuffle(deck);

    let {player, dealer} = scores.currentRound;

    player.hand = dealHand(deck, []);
    player.total = total(player.hand);
    dealer.hand = dealHand(deck, []);
    dealer.total = total(dealer.hand);

    // player turn

    prompt(`Dealer has: ${dealer.hand[0][1]} and unknown card`);

    do {
      prompt(`You have: ${displayCardValues(player.hand)} for a total of ${player.total}`);

      let answer = hitOrStay();

      if (answer === 'stay') break;

      player.hand.push(deck.pop());
      player.total = total(player.hand);
    } while (!busted(player.total));

    if (busted(player.total) ) {
      endRound(player, dealer, match);
      continue;
    } else {
      console.log('================================');
      prompt(`You stayed at ${player.total}`);
      console.log('================================');
    }

    // dealer turn
    prompt('Dealer turn...');

    while (dealer.total < DEALER_STAYS_SCORE) {
      prompt(`Dealer hits!`);
      dealer.hand.push(deck.pop());
      prompt(`Dealer has: ${displayCardValues(dealer.hand)}.`);
      dealer.total = total(dealer.hand);
    }

    if (busted(dealer.total)) {
      endRound(player, dealer, match);
      continue;
    } else {
      prompt(`Dealer stays at ${dealer.total}`);
    }

    endRound(player, dealer, match);
  }

  displayMatchWinner(match);

} while (playAgain());