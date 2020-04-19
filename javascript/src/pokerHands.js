const { rankText } = require("./rankText");

const { getCardValue, getCardText } = require("./utils");

class PokerHands {
  constructor(pokerHandEvaluator) {
    this.pokerHandEvaluator = pokerHandEvaluator;
  }

  get black() {
    return this._black;
  }
  get white() {
    return this._white;
  }

  set black(black) {
    this._black = black;
  }

  set white(white) {
    this._white = white;
  }

  getWinner() {
    const blackScore = this.pokerHandEvaluator.evaluate(this.black);
    const whiteScore = this.pokerHandEvaluator.evaluate(this.white);
    const blackValue = getCardValue(blackScore.value);
    const whiteValue = getCardValue(whiteScore.value);

    if (blackScore.rank === whiteScore.rank) {
      if (blackValue === whiteValue) {
        return "Tie";
      } else if (blackValue < whiteValue) {
        return (
          "White wins. - with " + rankText[whiteScore.rank] + ": " + getCardText(whiteScore.value)
        );
      } else {
        return (
          "Black wins. - with " + rankText[blackScore.rank] + ": " + getCardText(blackScore.value)
        );
      }
    } else if (blackScore.rank < whiteScore.rank) {
      return "White wins. - with " + rankText[whiteScore.rank];
    } else {
      return "Black wins. - with " + rankText[blackScore.rank];
    }
  }
}
exports.Pokerhands = PokerHands;
