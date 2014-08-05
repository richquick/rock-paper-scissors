describe("Move", function() {
  var move;
  var validMoves = [
  	'rock',
  	'paper',
  	'scissors'
  ];

  beforeEach(function() {
    move = new Move();
  });

  it("Returns a string", function() {
    expect(move.generate()).toEqual(jasmine.any(String));
  });

  it("Returns 'rock' if Math.random generates 0", function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(move.generate()).toEqual('rock');
  });

  it("Returns 'rock' if Math.random generates 0.3", function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    expect(move.generate()).toEqual('rock');
  });

  it("Returns 'paper' if Math.random generates 0.5", function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(move.generate()).toEqual('paper');
  });

  it("Returns 'scissors' if Math.random generates 0.8", function() {
    spyOn(Math, 'random').and.returnValue(0.8);
    expect(move.generate()).toEqual('scissors');
  });

  it("Returns 'scissors' if Math.random generates 1", function() {
    spyOn(Math, 'random').and.returnValue(1);
    expect(move.generate()).toEqual('scissors');
  });

 });