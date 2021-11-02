# PEDAC

## Understand the Problem

  ### Rules:
   **Deck:**
  - Start with a standard 52-card deck consisting of the 4 suits (Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

 **Goal:**
  - Try to get as close to 21 as  possible. 
    
  - If you go over 21, you lose
  
  **Setup:**
  - The game consists of a dealer and a player. 
    
  - Both participants are initially dealt a hand of two cards. 
    
  - The player can see their 2 cards, but can only see one of the dealer's cards.

  **Card Values:**
  - Cards 2-10 worth face value

  - Jack, Queen, and King each worth 10

  - Ace worth 1 or 11, dependent on hand value

  **Player turn:**
  - Player always goes first

  - Player can **hit** or **stay**

  - Player turn ends when they bust or stay
  
  **Dealer turn:**
  - If player stays, it's dealer's turn
  - Dealer hits until total >= 17
  - If dealer busts, player wins

  **Comparing cards:**
  - When both the player and the dealer stay, compare the total value of the cards and calculate highest value
  
## Examples/Test Cases

  **Example 1:**
  Dealer has: Ace and unknown card
  You have: 2 and 8

  HIT

  **Example 2:**
  Dealer has: 7 and unknown card
  You have: 10 and 7

  STAY

  **Example 3:**
  Dealer has: 5 and unknown card
  You have: Jack and 6

  STAY

## Data Structures

Nested array for cards
e.g. [['H', 2], ['C', 'J'], ['D', 'A']];

## Algorithm

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
   1. Ask player to hit or stay
   2. If stay, break from loop
   3. Else, go to 1.
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

## Code