class Card {
  constructor(card) {
    this.value = card[0];
    this.suit = card[1];
  }
}

class PokerHandEvaluator {
  evaluate(playerHand) {
    let cards = playerHand.split(" ");
    cards = cards.sort().map((card) => new Card(card));
    for (let i = 0; i < cards.length - 3; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value &&
        cards[i + 2].value === cards[i + 3].value
      ) {
        return "four of a kind: " + this.getCardText(cards[i].value);
      }
    }
    for (let i = 0; i < cards.length - 2; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value
      ) {
        return "three of a kind: " + this.getCardText(cards[i].value);
      }
    }
    for (let i = 0; i < cards.length - 1; i++) {
      if (cards[i].value === cards[i + 1].value) {
        return "pair: " + this.getCardText(cards[i].value);
      }
    }
    const highCard = this.getCardText(cards[4].value);
    return "high card: " + highCard;
  }

  getCardText(card) {
    const mapper = {
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "9": "9",
      "10": "10",
      J: "Jack",
      Q: "Queen",
      K: "King",
      A: "Ace",
    };
    return mapper[card];
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
