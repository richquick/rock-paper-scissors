function Game() {
}

Game.prototype.go = function(player1sGo,player2sGo) {
	var winningMoves = {
		'paper' 	: 'rock',
		'scissors' 	: 'paper',
		'rock'		: 'scissors'
	}

	if (winningMoves[player1sGo] == player2sGo) {
		return (1);
	} else if (winningMoves[player2sGo] == player1sGo) {
		return (2);
	} else if (player1sGo == player2sGo) {
		return (0);
	}
};