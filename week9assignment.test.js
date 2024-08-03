let expect = chai.expect;

describe("Card", () => {
  it("#should create a card with suit and value", () => {
    let card = new Card("diamonds", "K");
    expect(card.suit).to.equal("diamonds");
    expect(card.value).to.equal("K");
  });

  it("#should decribe a card correctly", () => {
    let card = new Card("clubs", "10");

    expect(card.describe()).to.equal("10 of clubs");
  });
});

describe("Deck", () => {
  it("#should create a deck with 52 cards", () => {
    let deck = new Deck();
    expect(deck.cards.length).to.equal(52);
  });
});

describe("Play", () => {
  it("#Card should return proper value", () => {
    let player = new Player();
    let card = new Card("hearts", "10");
    let cardJ = new Card("spades", "J");
    let cardX = new Card("spades", "U");

    let play = new Play();
    console.log(play.cardValue(cardX));
    expect(play.cardValue(card)).to.equal(10);
    expect(play.cardValue(cardJ)).to.equal(11);
    expect(play.cardValue(cardX)).to.be.NaN;
  });
});

describe("Play", () => {
  it("#should add cards to the hand", () => {
    let player = new Player();
    let card = new Card("hearts", "Q");
    player.addCard(card);
    expect(player.hand).to.include(card);
  });
});
