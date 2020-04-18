const { Card } = require("./Card");
const { getCardValue, getCardText } = require("./utils");

class PokerHandEvaluator {
  evaluate(playerHand) {
    let cards = playerHand.split(" ");
    cards = cards
      .map((card) => new Card(card))
      .sort((a, b) => {
        return getCardValue(a.value) - getCardValue(b.value);
      });
    this.cards = cards;
    // Straight Flush
    for (let i = 0; i < cards.length - 3; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value &&
        cards[i + 2].value === cards[i + 3].value
      ) {
        return "four of a kind: " + getCardText(cards[i].value);
      }
    }
    // FullHouse
    for (let index = 0; index < cards.length - 1; index++) {
      if (cards[index].suit !== cards[index + 1].suit) break;
      if (index === cards.length - 2) {
        return "flush: " + getCardText(cards[index + 1].value);
      }
    }

    for (let index = 0; index < cards.length - 1; index++) {
      if (
        getCardValue(cards[index].value) + 1 !==
        getCardValue(cards[index + 1].value)
      )
        break;
      if (index === cards.length - 2) {
        return "straight: " + getCardText(cards[index + 1].value);
      }
    }

    for (let i = 0; i < cards.length - 2; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value
      ) {
        return "three of a kind: " + getCardText(cards[i].value);
      }
    }
    // Two Pair
    const indexOf1stPair = this.indexOfPairCards(0, cards.length);
    if (indexOf1stPair != null) {
      const indexOf2ndPair = this.indexOfPairCards(indexOf1stPair + 1, cards.length);
      if (indexOf2ndPair != null) {
        return "two pairs: " + getCardText(cards[indexOf2ndPair].value);
      }
    }
    // Pair
    if (this.indexOfPairCards(0, cards.length) != null) {
      const index = this.indexOfPairCards(0, cards.length);
      return "pair: " + getCardText(this.cards[index].value);
    }
    const highCard = getCardText(cards[4].value);
    return "high card: " + highCard;
  }

  indexOfPairCards(start, end) {
    for (let i = start; i < end - 1; i++) {
      if (this.cards[i].value === this.cards[i + 1].value) {
        return i + 1;
      }
    }
    return null;
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
