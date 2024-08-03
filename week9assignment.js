// create class of card that will have and represent each card with its value or number and also the card suit as properties of constructor.
// the method descibe will return a representation of each card. (it is for one single card).

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  describe() {
    return `${this.value} of ${this.suit}`;
  }
}

//create class called Deck that will have cards as an array and methods of adding new cards in deck,

class Deck {
  constructor() {
    this.cards = [];
    this.addDeck();
    this.shuffle();
  }

  // dealing of card to add or initialize cards into deck
  // create variables arrays for card suits and values that will be assign globally.

  addDeck() {
    let suits = ["hearts", "diamonds", "clubs", "spades"];
    let values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    for (let suit of suits) {
      for (let value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }

  // and shuffle the deck of 52 cards. i used a for loop ; create a randomly card that will be swicthed or swapped
  // to random one too to do the shufflelling
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let cardIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[cardIndex]] = [
        this.cards[cardIndex],
        this.cards[i],
      ];
    }
  }

  // dealing of card to take it out from the deck after it is played
  deal() {
    return this.cards.pop();
  }
}

// this is a class that will take cards and an array of hand (for card in hand of player) as contructor arguments. it will take cards from class deck and add ponts to players accordingly.
//it will take addPoints as methos to add point each time it is used to increase players score
//the playCard method will return top card from the player hands
//the addCard method will add cards into the player hand

class Player {
  constructor() {
    this.hand = [];
    this.points = 0;
  }

  playCard() {
    return this.hand.shift();
  }

  addCard(card) {
    this.hand.push(card);
  }

  addPoints(point) {
    this.points += point;
  }
}

// this class we will create new players, have a method (dealDealCards) that will deal with initializing or giving each player 26 cards to play

class Play {
  constructor() {
    this.deck = new Deck();
    this.playerA = new Player();
    this.playerB = new Player();
    this.dealDealCards();
    this.rounds();
  }

  dealDealCards() {
    for (let i = 0; i < 26; i++) {
      this.playerA.addCard(this.deck.deal());
      this.playerB.addCard(this.deck.deal());
    }
    console.log("dealDealCards in Play Class: ", this.playerA, this.playerB);
  }

  //method called cardvalue that will help to numeric value of cards for comparison and will be instance of variable value in card class using swicth.

  cardValue(card) {
    switch (card.value) {
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
      case "A":
        return 14;
      default:
        return parseInt(card.value);
    }
  }

  //giving a method (rounds)to players to play round with the top card in their hand. this method will help to compare cards
  // and determine logic for playing each round of the game
  rounds() {
    while (this.playerA.hand.length > 0 && this.playerB.hand.length > 0) {
      let cardA = this.playerA.playCard();
      let cardB = this.playerB.playCard();

      let valueA = this.cardValue(cardA);
      let valueB = this.cardValue(cardB);

      if (valueA > valueB) {
        this.playerA.addPoints(1);
        console.log(`player A wins round with ${cardA.describe()}`);
      } else if (valueA < valueB) {
        this.playerB.addPoints(1);
        console.log(`player B wins round with ${cardB.describe()}`);
      } else {
        console.log(
          `It is a tie with ${cardA.describe()} and ${cardB.describe()}`
        );
      }
    }

    if (this.playerA.points > this.playerB.points) {
      console.log(`Player A win game with this ${this.playerA.points} points`);
    } else if (this.playerA.points < this.playerB.points) {
      console.log(`Player B win game with this ${this.playerB.points} points`);
    } else {
      console.log(
        `The game is a tie and player A has ${this.playerA.points} points and player B has ${this.playerB.points} points`
      );
    }
  }
}

let warGame = new Play();
