const {when} = require('jest-when');
const { Pokerhands } = require("../src/pokerHands");
const { PokerHandRankEnum } = require("../src/PokerHandRankEnum");
const { PokerHandEvaluator } = require("../src/pokerHandEvaluator");

jest.mock("../src/pokerHandEvaluator");

describe("Poker hands", () => {
  beforeEach(() => {
    PokerHandEvaluator.mockClear();
  });

  it("should be able to set black and white player hands", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);

    const blackPlayerHand = pokerHands.black;
    const whitePlayerHand = pokerHands.white;

    expect(blackPlayerHand).toBe(black);
    expect(whitePlayerHand).toBe(white);
  });

  it("should return white wins with high card Ace", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2C 3H 4S 8C AH";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);
    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate).calledWith(black).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "K" }
    );
    when(mockPokerHandEvaluator.evaluate).calledWith(white).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "A" }
    );

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with high card: Ace");
  });

  it("should return black wins with high card Ace", () => {
    const black = "2C 3H 4S 8C AH";
    const white = "2H 3D 5S 9C KD";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);
    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate).calledWith(black).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "A" }
    );
    when(mockPokerHandEvaluator.evaluate).calledWith(white).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "K" }
    );

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with high card: Ace");
  });

  it("should return Tie", () => {
    const black = "2H 3D 5S 9C KD";
    const white = "2D 3H 5C 9S KH";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);
    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate).calledWith(black).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "K" }
    );
    when(mockPokerHandEvaluator.evaluate).calledWith(white).mockReturnValue(
      { rank: PokerHandRankEnum.HIGH_CARD, value: "K" }
    );

    const result = pokerHands.getWinner();

    expect(result).toBe("Tie");
  });

  it("should return Black wins. - with full house", () => {
    const black = "2H 4S 4C 2D 4H";
    const white = "2S 8S AS QS 3S";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);
    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate).calledWith(black).mockReturnValue(
      { rank: PokerHandRankEnum.FULL_HOUSE, value: "4" }
    );
    when(mockPokerHandEvaluator.evaluate).calledWith(white).mockReturnValue(
      { rank: PokerHandRankEnum.FLUSH, value: "A" }
    );

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with full house");
  });

  it("should return White wins. - with full house", () => {
    const black = "2S 8S AS QS 3S";
    const white = "2H 4S 4C 2D 4H";
    const mockPokerHandEvaluator = new PokerHandEvaluator();
    const pokerHands = new Pokerhands(black, white, mockPokerHandEvaluator);
    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate).calledWith(black).mockReturnValue(
      { rank: PokerHandRankEnum.FLUSH, value: "A" }
    );
    when(mockPokerHandEvaluator.evaluate).calledWith(white).mockReturnValue(
      { rank: PokerHandRankEnum.FULL_HOUSE, value: "4" }
    );

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with full house");
  });
});
