describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("P1 Paper should beat P2 Rock", function() {
    expect(game.go('paper','rock')).toEqual(1);
  });

  it("P2 Paper should beat P1 Rock", function() {
    expect(game.go('rock','paper')).toEqual(2);
  });

  it("P1 Scissors should beat P2 Paper", function() {
    expect(game.go('scissors','paper')).toEqual(1);
  });

  it("P2 Scissors should beat P1 Paper", function() {
    expect(game.go('paper','scissors')).toEqual(2);
  });

  it("P1 Rock should beat P2 Scissors", function() {
    expect(game.go('rock','scissors')).toEqual(1);
  });

  it("P2 Rock should beat P1 Scissors", function() {
    expect(game.go('scissors','rock')).toEqual(2);
  });

  it("If P1 matches P2 it should be a draw", function() {
    expect(game.go('scissors','scissors')).toEqual(0);
    expect(game.go('rock','rock')).toEqual(0);
    expect(game.go('paper','paper')).toEqual(0);
  });

  it("Unrecognized guesses should return false", function() {
    expect(game.go('scissors','xxx')).toEqual(false);
    expect(game.go('xxx','scissors')).toEqual(false);
    expect(game.go('xxx','xxx')).toEqual(false);
  });

 });