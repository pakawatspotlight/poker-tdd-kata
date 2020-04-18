const { Card } = require("./Card");
const { getCardValue, getCardText } = require("./utils");

class PokerHandEvaluator {
  evaluate(playerHand) {
    this.setCards(playerHand);
    // Straight Flush

    // Four of a kinds
    for (let i = 0; i < this.cards.length - 3; i++) {
      if (
        this.cards[i].value === this.cards[i + 1].value &&
        this.cards[i + 1].value === this.cards[i + 2].value &&
        this.cards[i + 2].value === this.cards[i + 3].value
      ) {
        return "four of a kind: " + getCardText(this.cards[i].value);
      }
    }

    // FullHouse
    const indexOfThreeKindForFH = this.indexOfThreeOfAKind(0, this.cards.length - 2);
    if (indexOfThreeKindForFH !== null) {
      if (indexOfThreeKindForFH === 2) {
        const indexOfPair = this.indexOfPairCards(3, this.cards.length - 1);
        if (indexOfPair != null) {
          return (
            "Full House: " + getCardText(this.cards[indexOfThreeKindForFH].value)
          );
        }
      } else if (indexOfThreeKindForFH === 4) {
        const indexOfPair = this.indexOfPairCards(0, 1);
        if (indexOfPair != null) {
          return (
            "Full House: " + getCardText(this.cards[indexOfThreeKindForFH].value)
          );
        }
      }
    }

    // Flush
    for (let index = 0; index < this.cards.length - 1; index++) {
      if (this.cards[index].suit !== this.cards[index + 1].suit) break;
      if (index === this.cards.length - 2) {
        return "flush: " + getCardText(this.cards[index + 1].value);
      }
    }

    // Straight
    for (let index = 0; index < this.cards.length - 1; index++) {
      if (
        getCardValue(this.cards[index].value) + 1 !==
        getCardValue(this.cards[index + 1].value)
      )
        break;
      if (index === this.cards.length - 2) {
        return "straight: " + getCardText(this.cards[index + 1].value);
      }
    }

    // Three of a kind
    const indexOfThreeKind = this.indexOfThreeOfAKind(0, this.cards.length - 2);
    if (indexOfThreeKind !== null) {
      return "three of a kind: " + getCardText(this.cards[indexOfThreeKind].value);
    }

    // Two Pair
    const indexOf1stPair = this.indexOfPairCards(0, this.cards.length - 1);
    if (indexOf1stPair != null) {
      const indexOf2ndPair = this.indexOfPairCards(
        indexOf1stPair + 1,
        this.cards.length - 1
      );
      if (indexOf2ndPair != null) {
        return "two pairs: " + getCardText(this.cards[indexOf2ndPair].value);
      }
    }

    // Pair
    if (this.indexOfPairCards(0, this.cards.length - 1) != null) {
      const index = this.indexOfPairCards(0, this.cards.length - 1);
      return "pair: " + getCardText(this.cards[index].value);
    }

    // HighCards
    const highCard = getCardText(this.cards[4].value);
    return "high card: " + highCard;
  }

  indexOfThreeOfAKind(start, end) {
    for (let i = start; i < end; i++) {
      if (
        this.cards[i].value === this.cards[i + 1].value &&
        this.cards[i + 1].value === this.cards[i + 2].value
      ) {
        return i + 2;
      }
    }
    return null;
  }

  indexOfPairCards(start, end) {
    for (let i = start; i < end; i++) {
      if (this.cards[i].value === this.cards[i + 1].value) {
        return i + 1;
      }
    }
    return null;
  }

  setCards(playerHand) {
    const cards = playerHand.split(" ");
    this.cards = cards
      .map((card) => new Card(card))
      .sort((a, b) => {
        return getCardValue(a.value) - getCardValue(b.value);
      });
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
