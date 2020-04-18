const { PokerHandEvaluator } = require("../src/pokerHandEvaluator");
const { PokerHandRankEnum } = require("../src/PokerHandRankEnum");

describe("PokerHandEvaluator", () => {
  describe("High card", () => {
    it("should return High card: Ace", () => {
      const playerHand = "2C 3H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.HIGH_CARD, value: "A" });
    });

    it("should return High card: 9", () => {
      const playerHand = "2C 3H 4S 8C 9H";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.HIGH_CARD, value: "9" });
    });

    it("should return High card: Jack", () => {
      const playerHand = "2C 3H 4S 8C JH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.HIGH_CARD, value: "J" });
    });

    it("should return High card: Jack", () => {
      const playerHand = "2C 3H 4S JH 8C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.HIGH_CARD, value: "J" });
    });
  });

  describe("Pair", () => {
    it("should return pair: 2", () => {
      const playerHand = "2C 2H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.PAIR, value: "2" });
    });

    it("should return pair: 3", () => {
      const playerHand = "3C 3H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.PAIR, value: "3" });
    });

    it("should return pair: 4", () => {
      const playerHand = "3C 4H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.PAIR, value: "4" });
    });

    it("should return pair: 8", () => {
      const playerHand = "3C 4H 8S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.PAIR, value: "8" });
    });

    it("should return pair: Ace", () => {
      const playerHand = "3C 4H 8S AC AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.PAIR, value: "A" });
    });
  });

  describe("Three of a Kind", () => {
    it("should return three of a kind: 2", () => {
      const playerHand = "2C 2H 2S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.THREE_OF_A_KIND, value: "2" });
    });

    it("should return three of a kind: 8", () => {
      const playerHand = "2C 8H 8S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.THREE_OF_A_KIND, value: "8" });
    });

    it("should return three of a kind: 8", () => {
      const playerHand = "2C 3C 8H 8S 8C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.THREE_OF_A_KIND, value: "8" });
    });
  });

  describe("Four of a Kind", () => {
    it("should return Four of a kind: 2", () => {
      const playerHand = "2C 2H 2S 2D AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.FOUR_OF_A_KIND, value: "2" });
    });
  });

  describe("Two Pairs", () => {
    it("should return Two pairs: 3", () => {
      const playerHand = "2C 2H 3S 3D AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.TWO_PAIRS, value: "3" });
    });

    it("should return Two pairs: Ace", () => {
      const playerHand = "2C 2H 3S AD AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.TWO_PAIRS, value: "A" });
    });
  });

  describe("Straight", () => {
    it("should return straight: 6", () => {
      const playerHand = "2C 3H 4S 5D 6H";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.STRAIGHT, value: "6" });
    });

    it("should return straight: Ace", () => {
      const playerHand = "TC JH QS KD AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.STRAIGHT, value: "A" });
    });
  });

  describe("Flush", () => {
    it("should return Flush: 7", () => {
      const playerHand = "2C 3C 4C 5C 7C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.FLUSH, value: "7" });
    });
    it("should return Flush: Ace", () => {
      const playerHand = "2C 3C 4C 5C AC";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.FLUSH, value: "A" });
    });
  });

  describe("Full House", () => {
    it("should return Flush: 7", () => {
      const playerHand = "2C 2D 7C 7C 7C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.FULL_HOUSE, value: "7" });
    });

    it("should return Flush: 7", () => {
      const playerHand = "7C 7C 7C AC AD";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.FULL_HOUSE, value: "7" });
    });
  });

  describe("Straight Flush", () => {
    it("should return straight flush: 6", () => {
      const playerHand = "2H 3H 4H 5H 6H";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.STRAIGHT_FLUSH, value: "6" });
    });

    it("should return straight flush: Ace", () => {
      const playerHand = "TH JH QH KH AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toEqual({ rank: PokerHandRankEnum.STRAIGHT_FLUSH, value: "A" });
    });
  });
});
