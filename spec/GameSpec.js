describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Game.play", function() {
    it("is a function", function() {
      expect(typeof game.play).toEqual('function');
    });
  });

  describe("Game.go", function() {
    it("is a function", function() {
      expect(typeof game.go).toEqual('function');
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

  describe("Game.displayChoices", function() {
    it("is a function", function() {
      expect(typeof game.displayChoices).toEqual('function');
    });
  });

describe("Game.calcutateResultsMessage", function() {

    var resultMessageSnippets = {
      error   : "Woops! There was an error!",
      draw    : "It's a draw!"
    }

    it("is a function", function() {
      expect(typeof game.calcutateResultsMessage).toEqual('function');
    });

    it("Returns a string", function() {
      expect(game.calcutateResultsMessage(0,"rock","paper")).toEqual(jasmine.any(String));
    });

    it("P1 Paper should beat P2 Rock", function() {
      expect(game.calcutateResultsMessage(1,'paper','rock')).toEqual('paper beats rock - you win :)');
    });

    it("P2 Paper should beat P1 Rock", function() {
      expect(game.calcutateResultsMessage(2,'rock','paper')).toEqual('paper beats rock - you lose :(');
    });

    it("P1 Scissors should beat P2 Paper", function() {
      expect(game.calcutateResultsMessage(1,'scissors','paper')).toEqual('scissors beats paper - you win :)');
    });

    it("P2 Scissors should beat P1 Paper", function() {
      expect(game.calcutateResultsMessage(2,'paper','scissors')).toEqual('scissors beats paper - you lose :(');
    });

    it("P1 Rock should beat P2 Scissors", function() {
      expect(game.calcutateResultsMessage(1,'rock','scissors')).toEqual('rock beats scissors - you win :)');
    });

    it("P2 Rock should beat P1 Scissors", function() {
      expect(game.calcutateResultsMessage(2,'scissors','rock')).toEqual('rock beats scissors - you lose :(');
    });

    it("If P1 matches P2 it should be a draw", function() {
      expect(game.calcutateResultsMessage(0,'scissors','scissors')).toEqual(resultMessageSnippets.draw);
      expect(game.calcutateResultsMessage(0,'rock','rock')).toEqual(resultMessageSnippets.draw);
      expect(game.calcutateResultsMessage(0,'paper','paper')).toEqual(resultMessageSnippets.draw);
    });

    it("Unrecognized guesses should return false", function() {
      expect(game.calcutateResultsMessage(false,'scissors','xxx')).toEqual(resultMessageSnippets.error);
      expect(game.calcutateResultsMessage(false,'xxx','scissors')).toEqual(resultMessageSnippets.error);
      expect(game.calcutateResultsMessage(false,'xxx','xxx')).toEqual(resultMessageSnippets.error);
    });
  });

  describe("Game.displayResult", function() {
    it("is a function", function() {
      expect(typeof game.displayResult).toEqual('function');
    });
  });
});