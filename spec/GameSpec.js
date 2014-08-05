describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("P1 Paper should beat P2 Rock", function() {
    expect(game.go('paper','rock')).toEqual(1);
  });

  it("P2 Paper should beath P1 Rock", function() {
    expect(game.go('rock','paper')).toEqual(2);
  });

 });