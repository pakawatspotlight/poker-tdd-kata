const {Pokerhands} = require('../src/pokerHands');

describe("Poker hands", () => {

  it("should be able to set black and white player hands", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const pokerHands = new Pokerhands(black, white);

    const blackPlayerHand = pokerHands.black;
    const whitePlayerHand = pokerHands.white;

    expect(blackPlayerHand).toBe(black);
    expect(whitePlayerHand).toBe(white);
  });

  it("should return white wins with high card Ace", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const pokerHands = new Pokerhands(black, white);

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with high card: Ace")
  });
});
