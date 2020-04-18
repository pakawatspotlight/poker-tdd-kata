const {PokerHandEvaluator} = require('../src/pokerHandEvaluator');

describe('PokerHandEvaluator', () => {
    it('should return High card: Ace', () => {
        const playerHand = "2C 3H 4S 8C AH";
        const pokerHandEvaluator = new PokerHandEvaluator();

        const result = pokerHandEvaluator.evaluate(playerHand);

        expect(result).toBe("high card: Ace");
    });
});