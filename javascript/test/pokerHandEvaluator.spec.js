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

    it("should return three of a kind: 8", () => {
      const playerHand = "2C 3C 8H 8S 8C";
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

  describe("Straight", () => {
    it("should return straight: 6", () => {
      const playerHand = "2C 3H 4S 5D 6H";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("straight: 6");
    });

    it("should return straight: Ace", () => {
      const playerHand = "TC JH QS KD AH";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("straight: Ace");
    });
  });

  describe("Flush", () => {
    it("should return Flush: 7", () => {
      const playerHand = "2C 3C 4C 5C 7C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("flush: 7");
    });
    it("should return Flush: Ace", () => {
      const playerHand = "2C 3C 4C 5C AC";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("flush: Ace");
    });
  });

  describe("Full House", () => {
    it("should return Flush: 7", () => {
      const playerHand = "2C 2D 7C 7C 7C";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("Full House: 7");
    });

    it("should return Flush: 7", () => {
      const playerHand = "7C 7C 7C AC AD";
      const pokerHandEvaluator = new PokerHandEvaluator();

      const result = pokerHandEvaluator.evaluate(playerHand);

      expect(result).toBe("Full House: 7");
    });
  });
});
