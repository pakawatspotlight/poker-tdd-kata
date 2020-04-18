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
    // Flush

    let index = 0;
    console.log(cards);
    for (; index < cards.length - 1; index++) {
      if (cards[index].suit !== cards[index + 1].suit) break;
    }
    console.log(index);
    if (index === cards.length - 1) {
      return "flush: " + getCardText(cards[index].value);
    }

    // let index = 0;
    for (; index < cards.length - 1; index++) {
      if (
        getCardValue(cards[index].value) + 1 !==
        getCardValue(cards[index + 1].value)
      )
        break;
    }
    if (index === cards.length - 1) {
      return "straight: " + getCardText(cards[index].value);
    }
    for (let i = 0; i < cards.length - 2; i++) {
      if (
        cards[i].value === cards[i + 1].value &&
        cards[i + 1].value === cards[i + 2].value
      ) {
        return "three of a kind: " + getCardText(cards[i].value);
      }
    }
    for (let i = 0; i < cards.length - 1; i++) {
      if (cards[i].value === cards[i + 1].value) {
        for (let j = i + 2; j < cards.length - 1; j++) {
          if (cards[j].value === cards[j + 1].value) {
            return "two pairs: " + getCardText(cards[j].value);
          }
        }
      }
    }
    for (let i = 0; i < cards.length - 1; i++) {
      if (cards[i].value === cards[i + 1].value) {
        return "pair: " + getCardText(cards[i].value);
      }
    }
    const highCard = getCardText(cards[4].value);
    return "high card: " + highCard;
  }
}

exports.PokerHandEvaluator = PokerHandEvaluator;
