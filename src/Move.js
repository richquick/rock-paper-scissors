function Move() {
	global.move = {
		validMoves : [
		  'rock',
		  'paper',
		  'scissors'
		],
		computerMove : "computer"
	}
}

Move.prototype.generate = function() {
	var seed = Math.floor(Math.random()*global.move.validMoves.length);
	seed = (seed > global.move.validMoves.length - 1) ? global.move.validMoves.length - 1 : seed;
	return (global.move.validMoves[seed]);
};

Move.prototype.choose = function(player1sGo) {

	global.isComputerTurn = (player1sGo == global.move.computerMove) ? true : false;

	if (player1sGo == global.move.computerMove) {
		player1sGo = this.generate();
	}

	var player2sGo = this.generate();
	var game = new Game();
	game.play(player1sGo,player2sGo);
};