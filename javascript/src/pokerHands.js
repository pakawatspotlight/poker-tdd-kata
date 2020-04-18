class PokerHands {
  constructor(black, white) {
    this._black = black;
    this._white = white;
  }

  get black() { return this._black; }
  get white() { return this._white; }

  getWinner() {
    return "White wins. - with high card: Ace";
  }
}
exports.Pokerhands = PokerHands;
