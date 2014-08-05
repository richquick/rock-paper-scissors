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