const { when } = require("jest-when");
const { Pokerhands } = require("../src/pokerHands");
const { PokerHandRankEnum } = require("../src/PokerHandRankEnum");
const { PokerHandEvaluator } = require("../src/pokerHandEvaluator");

jest.mock("../src/pokerHandEvaluator");

describe("Poker hands", () => {
  let pokerHands;
  let mockPokerHandEvaluator;

  beforeEach(() => {
    PokerHandEvaluator.mockClear();
    mockPokerHandEvaluator = new PokerHandEvaluator();
    pokerHands = new Pokerhands(mockPokerHandEvaluator);
  });

  it("should be able to set black and white player hands", () => {
    pokerHands.black = "2H 3D 5S 9C KD";
    pokerHands.white = "2C 3H 4S 8C AH";

    const blackPlayerHand = pokerHands.black;
    const whitePlayerHand = pokerHands.white;

    expect(blackPlayerHand).toBe(pokerHands.black);
    expect(whitePlayerHand).toBe(pokerHands.white);
  });

  it("should return white wins with high card Ace", () => {
    pokerHands.black = "2H 3D 5S 9C KD";
    pokerHands.white = "2C 3H 4S 8C AH";

    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.black)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "K" });
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.white)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "A" });

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with high card: Ace");
  });

  it("should return black wins with high card Ace", () => {
    pokerHands.black = "2C 3H 4S 8C AH";
    pokerHands.white = "2H 3D 5S 9C KD";

    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.black)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "A" });
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.white)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "K" });

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with high card: Ace");
  });

  it("should return Tie", () => {
    pokerHands.black = "2H 3D 5S 9C KD";
    pokerHands.white = "2D 3H 5C 9S KH";

    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.black)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "K" });
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.white)
      .mockReturnValue({ rank: PokerHandRankEnum.HIGH_CARD, value: "K" });

    const result = pokerHands.getWinner();

    expect(result).toBe("Tie");
  });

  it("should return Black wins. - with full house", () => {
    pokerHands.black = "2H 4S 4C 2D 4H";
    pokerHands.white = "2S 8S AS QS 3S";

    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.black)
      .mockReturnValue({ rank: PokerHandRankEnum.FULL_HOUSE, value: "4" });
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.white)
      .mockReturnValue({ rank: PokerHandRankEnum.FLUSH, value: "A" });

    const result = pokerHands.getWinner();

    expect(result).toBe("Black wins. - with full house");
  });

  it("should return White wins. - with full house", () => {
    pokerHands.black = "2S 8S AS QS 3S";
    pokerHands.white = "2H 4S 4C 2D 4H";

    mockPokerHandEvaluator.evaluate = jest.fn();
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.black)
      .mockReturnValue({ rank: PokerHandRankEnum.FLUSH, value: "A" });
    when(mockPokerHandEvaluator.evaluate)
      .calledWith(pokerHands.white)
      .mockReturnValue({ rank: PokerHandRankEnum.FULL_HOUSE, value: "4" });

    const result = pokerHands.getWinner();

    expect(result).toBe("White wins. - with full house");
  });
});
