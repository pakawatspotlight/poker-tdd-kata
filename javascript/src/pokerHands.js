const { PokerHandEvaluator } = require("./pokerHandEvaluator");
const { getCardValue, getCardText } = require("./utils");

const cardText = [
  "high card",
  "pair",
  "two pairs",
  "three of a kind",
  "straight",
  "flush",
  "full house",
  "four of a kind",
  "straight flush",
];

class PokerHands {
  constructor(black, white) {
    this._black = black;
    this._white = white;
  }

  get black() {
    return this._black;
  }
  get white() {
    return this._white;
  }

  getWinner() {
    const blackScore = new PokerHandEvaluator().evaluate(this.black);
    const whiteScore = new PokerHandEvaluator().evaluate(this.white);
    const blackValue = getCardValue(blackScore.value);
    const whiteValue = getCardValue(whiteScore.value);

    if (blackScore.rank === whiteScore.rank) {
      if (blackValue === whiteValue) {
        return "Tie";
      } else if (blackValue < whiteValue) {
        return (
          "White wins. - with " + cardText[whiteScore.rank] + ": " + getCardText(whiteScore.value)
        );
      } else {
        return (
          "Black wins. - with " + cardText[blackScore.rank] + ": " + getCardText(blackScore.value)
        );
      }
    } else if (blackScore.rank < whiteScore.rank) {
      return "White wins. - with " + cardText[whiteScore.rank];
    } else {
      return "Black wins. - with " + cardText[blackScore.rank];
    }
  }
}
exports.Pokerhands = PokerHands;
