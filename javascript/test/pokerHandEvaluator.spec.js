const { PokerHandEvaluator } = require("../src/pokerHandEvaluator");

describe("PokerHandEvaluator", () => {
  describe("High card", () => {
    it("should return High card: Ace", () => {
      const playerHand = "2C 3H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("high card: Ace");
    });

    it("should return High card: 9", () => {
      const playerHand = "2C 3H 4S 8C 9H";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("high card: 9");
    });

    it("should return High card: Jack", () => {
      const playerHand = "2C 3H 4S 8C JH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("high card: Jack");
    });

    it("should return High card: Jack", () => {
      const playerHand = "2C 3H 4S JH 8C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("high card: Jack");
    });
  });

  describe("Pair", () => {
    it("should return pair: 2", () => {
      const playerHand = "2C 2H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("pair: 2");
    });

    it("should return pair: 3", () => {
      const playerHand = "3C 3H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("pair: 3");
    });

    it("should return pair: 4", () => {
      const playerHand = "3C 4H 4S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("pair: 4");
    });

    it("should return pair: 8", () => {
      const playerHand = "3C 4H 8S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("pair: 8");
    });

    it("should return pair: Ace", () => {
      const playerHand = "3C 4H 8S AC AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("pair: Ace");
    });
  });

  describe("Three of a Kind", () => {
    it("should return three of a kind: 2", () => {
      const playerHand = "2C 2H 2S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("three of a kind: 2");
    });

    it("should return three of a kind: 8", () => {
      const playerHand = "2C 8H 8S 8C AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("three of a kind: 8");
    });
  });

  describe("Four of a Kind", () => {
    it("should return Four of a kind: 2", () => {
      const playerHand = "2C 2H 2S 2D AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("four of a kind: 2");
    });
  });

  describe("Two Pairs", () => {
    it("should return Two pairs: 3", () => {
      const playerHand = "2C 2H 3S 3D AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("two pairs: 3");
    });

    it("should return Two pairs: Ace", () => {
      const playerHand = "2C 2H 3S AD AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("two pairs: Ace");
    });
  });
});
