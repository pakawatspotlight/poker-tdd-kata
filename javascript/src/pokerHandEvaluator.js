class PokerHandEvaluator {
  evaluate(playerHand) {
    const cards = playerHand.split(" ");
    const mapper = this.getCardText();
    const highCard = mapper[cards[4][0]];
    return "high card: " + highCard;
  }

  getCardText() {
    return {
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
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
