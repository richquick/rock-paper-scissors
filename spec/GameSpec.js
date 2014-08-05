describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Rock should beat Paper", function() {
    expect(game.go('rock','paper')).toEqual(1);
  });

 });