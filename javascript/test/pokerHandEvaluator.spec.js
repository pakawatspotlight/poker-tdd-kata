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
  });
});
