class Card {
  constructor(card) {
    this.value = card[0];
    this.suit = card[1];
  }
}

class PokerHandEvaluator {
  evaluate(playerHand) {
    let cards = playerHand.split(" ");
    cards = cards
      .map((card) => new Card(card))
      .sort((a, b) => {
        return this.getCardValue(a.value) - this.getCardValue(b.value);
      });
    for (let i = 0; i < cards.length - 3; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value &&
        cards[i + 2].value === cards[i + 3].value
      ) {
        return "four of a kind: " + this.getCardText(cards[i].value);
      }
    }
    let index = 0;
    console.log(cards);
    for (; index < cards.length - 1; index++) {
      if (
        this.getCardValue(cards[index].value) + 1 !==
        this.getCardValue(cards[index + 1].value)
      )
        break;
    }
    console.log(index);
    if (index === cards.length - 1) {
      return "straight: " + this.getCardText(cards[index].value);
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
        for (let j = i + 2; j < cards.length - 1; j++) {
          if (cards[j].value === cards[j + 1].value) {
            return "two pairs: " + this.getCardText(cards[j].value);
          }
        }
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

  getCardValue(card) {
    const mapper = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "9": 9,
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    return mapper[card];
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
      T: "10",
      J: "Jack",
      Q: "Queen",
      K: "King",
      A: "Ace",
    };
    return mapper[card];
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
