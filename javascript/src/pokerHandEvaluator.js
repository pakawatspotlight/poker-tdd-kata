class PokerHandEvaluator {
  evaluate(playerHand) {
    let cards = playerHand.split(" ");
    cards = cards.sort();
    for (let i = 0; i < cards.length - 3; i++) {
        if (cards[i][0] === cards[i+1][0] && cards[i+1][0] === cards[i+2][0] && cards[i+2][0] === cards[i+3][0]) {
        return "four of a kind: " + this.getCardText(cards[i][0]);
      }
    }
    for (let i = 0; i < cards.length - 2; i++) {
      if (cards[i][0] === cards[i+1][0] && cards[i+1][0] === cards[i+2][0]) {
        return "three of a kind: " + this.getCardText(cards[i][0]);
      }
    }
    for (let i = 0; i < cards.length - 1; i++) {
      if (cards[i][0] === cards[i + 1][0]) {
        return "pair: " + this.getCardText(cards[i][0]);
      }
    }
    const highCard = this.getCardText(cards[4][0]);
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
