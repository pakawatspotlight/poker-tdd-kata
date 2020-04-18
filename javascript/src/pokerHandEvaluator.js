const { PokerHandRankEnum } = require("./PokerHandRankEnum");

const { Card } = require("./Card");
const { getCardValue } = require("./utils");

class PokerHandEvaluator {
  evaluate(playerHand) {
    this.setCards(playerHand);
    // Straight Flush
    const indexStraightFlush = this.getIndexOfStraightFlush();
    if (indexStraightFlush !== null) {
      return {
        rank: PokerHandRankEnum.STRAIGHT_FLUSH,
        value: this.cards[indexStraightFlush].value,
      };
    }

    // Four of a kinds
    const indexFourOfKind = this.getIndexOfFourOfAKind();
    if (indexFourOfKind !== null) {
      return {
        rank: PokerHandRankEnum.FOUR_OF_A_KIND,
        value: this.cards[indexFourOfKind].value,
      };
    }

    // FullHouse
    const indexFullHouse = this.getIndexOfFullHouse();
    if (indexFullHouse !== null) {
      return {
        rank: PokerHandRankEnum.FULL_HOUSE,
        value: this.cards[indexFullHouse].value,
      };
    }

    // Flush
    const indexFlush = this.getIndexOfFlush();
    if (indexFlush !== null) {
      return {
        rank: PokerHandRankEnum.FLUSH,
        value: this.cards[indexFlush].value,
      };
    }

    // Straight
    const indexStraight = this.getIndexOfStraight();
    if (indexStraight !== null) {
      return {
        rank: PokerHandRankEnum.STRAIGHT,
        value: this.cards[indexStraight].value,
      };
    }

    // Three of a kind
    const indexOfThreeKind = this.getIndexOfThreeOfAKind(
      0,
      this.cards.length - 2
    );
    if (indexOfThreeKind !== null) {
      return {
        rank: PokerHandRankEnum.THREE_OF_A_KIND,
        value: this.cards[indexOfThreeKind].value,
      };
    }

    // Two Pair
    const indexOfTwoPair = this.getIndexOfTwoPairs();
    if (indexOfTwoPair != null) {
      return {
        rank: PokerHandRankEnum.TWO_PAIRS,
        value: this.cards[indexOfTwoPair].value,
      };
    }

    // Pair
    const indexOfPair = this.getIndexOfPairCards(0, this.cards.length - 1);
    if (indexOfPair != null) {
      return {
        rank: PokerHandRankEnum.PAIR,
        value: this.cards[indexOfPair].value,
      };
    }

    // HighCards
    return { rank: PokerHandRankEnum.HIGH_CARD, value: this.cards[4].value };
  }

  getIndexOfStraightFlush() {
    const indexStraight = this.getIndexOfStraight();
    const indexFlush = this.getIndexOfFlush();
    if (indexStraight !== null && indexFlush !== null) {
      return indexStraight;
    }
    return null;
  }

  getIndexOfFourOfAKind() {
    for (let i = 0; i < this.cards.length - 3; i++) {
      if (
        this.cards[i].value === this.cards[i + 1].value &&
        this.cards[i + 1].value === this.cards[i + 2].value &&
        this.cards[i + 2].value === this.cards[i + 3].value
      ) {
        return i;
      }
    }
    return null;
  }

  getIndexOfFullHouse() {
    const indexThreeOfAKind = this.getIndexOfThreeOfAKind(
      0,
      this.cards.length - 2
    );
    if (indexThreeOfAKind !== null) {
      if (indexThreeOfAKind === 2) {
        const indexOfPair = this.getIndexOfPairCards(3, this.cards.length - 1);
        if (indexOfPair != null) {
          return indexThreeOfAKind;
        }
      } else if (indexThreeOfAKind === 4) {
        const indexOfPair = this.getIndexOfPairCards(0, 1);
        if (indexOfPair != null) {
          return indexThreeOfAKind;
        }
      }
    }
    return null;
  }

  getIndexOfFlush() {
    let index = 0;
    for (; index < this.cards.length - 1; index++) {
      if (this.cards[index].suit !== this.cards[index + 1].suit) break;
    }
    if (index === this.cards.length - 1) {
      return index;
    }
    return null;
  }

  getIndexOfStraight() {
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

  getIndexOfTwoPairs() {
    const indexOf1stPair = this.getIndexOfPairCards(0, this.cards.length - 1);
    if (indexOf1stPair != null) {
      const indexOf2ndPair = this.getIndexOfPairCards(
        indexOf1stPair + 1,
        this.cards.length - 1
      );
      if (indexOf2ndPair != null) {
        return indexOf2ndPair;
      }
    }
    return null;
  }

  getIndexOfThreeOfAKind(start, end) {
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

  getIndexOfPairCards(start, end) {
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
