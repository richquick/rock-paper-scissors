function Move() {
}

Move.prototype.generate = function() {
	var seed = Math.floor(Math.random()*3);
	var validMoves = [
	  'rock',
	  'paper',
	  'scissors'
	];

	if (seed > 2) {
		seed = 2;
	}

	return (validMoves[seed]);
};

Move.prototype.choose = function(player1sGo) {

	global.isComputerTurn = (player1sGo == 'computer') ? true : false;

	if (player1sGo == 'computer') {
		player1sGo = this.generate();
	}

	var player2sGo = this.generate();
	var game = new Game();
	game.play(player1sGo,player2sGo);
};