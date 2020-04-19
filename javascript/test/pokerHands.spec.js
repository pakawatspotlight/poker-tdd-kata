const {Pokerhands} = require('../src/pokerHands');
const {PokerHandEvaluator} = require('../src/pokerHandEvaluator');

describe("Poker hands", () => {

  it("should be able to set black and white player hands", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const blackPlayerHand = pokerHands.black;
    const whitePlayerHand = pokerHands.white;

    expect(blackPlayerHand).toBe(black);
    expect(whitePlayerHand).toBe(white);
  });

  it("should return white wins with high card Ace", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with high card: Ace");
  });
  it("should return black wins with high card Ace", () => {
    const black = "2C 3H 4S 8C AH";
    const white = "2H 3D 5S 9C KD";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with high card: Ace");
  });

  it("should return Tie", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2D 3H 5C 9S KH";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const result = pokerHands.getWinner();

    expect(result).toBe("Tie");
  });

  it("should return Black wins. - with full house", () => {
    const black = "2H 4S 4C 2D 4H";
    const white = "2S 8S AS QS 3S";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with full house");
  });

  it("should return White wins. - with full house", () => {
    const black = "2S 8S AS QS 3S";
    const white = "2H 4S 4C 2D 4H";
    const pokerHands = new Pokerhands(black, white, new PokerHandEvaluator());

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with full house");
  });
});