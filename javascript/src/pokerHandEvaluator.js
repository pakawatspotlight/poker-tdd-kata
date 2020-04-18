class PokerHandEvaluator {
  evaluate(playerHand) {
    let cards = playerHand.split(" ");
    cards = cards.sort();
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
