const { Card } = require("./Card");
const { getCardValue, getCardText } = require("./utils");

const FOUR_OF_A_KIND = "four of a kind: ";
const FULL_HOUSE = "Full House: ";
const FLUSH = "flush: ";
const STRAIGHT = "straight: ";
const THREE_OF_A_KIND = "three of a kind: ";
const TWO_PAIRS = "two pairs: ";
const PAIR = "pair: ";
const HIGH_CARD = "high card: ";

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
        return FOUR_OF_A_KIND + getCardText(this.cards[i].value);
      }
    }

    // FullHouse
    const indexFullHouse = this.indexOfFullHouse();
    if (indexFullHouse !== null) {
      return FULL_HOUSE + getCardText(this.cards[indexFullHouse].value);
    }

    // Flush
    const indexFlush = this.indexOfFlush();
    if (indexFlush !== null) {
      return FLUSH + getCardText(this.cards[indexFlush].value);
    }

    // Straight
    const indexStraight = this.indexOfStraight();
    if (indexStraight !== null) {
      return STRAIGHT + getCardText(this.cards[indexStraight].value);
    }

    // Three of a kind
    const indexOfThreeKind = this.indexOfThreeOfAKind(0, this.cards.length - 2);
    if (indexOfThreeKind !== null) {
      return THREE_OF_A_KIND + getCardText(this.cards[indexOfThreeKind].value);
    }

    // Two Pair
    const indexOfTwoPair = this.indexOfTwoPairs();
    if (indexOfTwoPair != null) {
      return TWO_PAIRS + getCardText(this.cards[indexOfTwoPair].value);
    }

    // Pair
    const indexOfPair = this.indexOfPairCards(0, this.cards.length - 1);
    if (indexOfPair != null) {
      return PAIR + getCardText(this.cards[indexOfPair].value);
    }

    // HighCards
    return HIGH_CARD + getCardText(this.cards[4].value);
  }

  indexOfFullHouse() {
    const indexOfThreeKindForFH = this.indexOfThreeOfAKind(
      0,
      this.cards.length - 2
    );
    if (indexOfThreeKindForFH !== null) {
      if (indexOfThreeKindForFH === 2) {
        const indexOfPair = this.indexOfPairCards(3, this.cards.length - 1);
        if (indexOfPair != null) {
          return (
            indexOfThreeKindForFH
          );
        }
      } else if (indexOfThreeKindForFH === 4) {
        const indexOfPair = this.indexOfPairCards(0, 1);
        if (indexOfPair != null) {
          return (
            indexOfThreeKindForFH
          );
        }
      }
    }
    return null;
  }

  indexOfFlush() {
    let index = 0;
    for (; index < this.cards.length - 1; index++) {
      if (this.cards[index].suit !== this.cards[index + 1].suit) break;
    }
    if (index === this.cards.length - 1) {
      return index;
    }
    return null;
  }

  indexOfStraight() {
    let index = 0;
    for (; index < this.cards.length - 1; index++) {
      if (
        getCardValue(this.cards[index].value) + 1 !==
        getCardValue(this.cards[index + 1].value)
      )
        break;
    }
    if (index === this.cards.length - 1) {
      return index;
    }
    return null;
  }

  indexOfTwoPairs() {
    const indexOf1stPair = this.indexOfPairCards(0, this.cards.length - 1);
    if (indexOf1stPair != null) {
      const indexOf2ndPair = this.indexOfPairCards(
        indexOf1stPair + 1,
        this.cards.length - 1
      );
      if (indexOf2ndPair != null) {
        return indexOf2ndPair;
      }
    }
    return null;
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
