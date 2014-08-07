function Game() {
}

Game.prototype.play = function(player1sGo,player2sGo) {
	this.displayChoices(player1sGo,player2sGo);
	this.displayResult(this.go(player1sGo,player2sGo),player1sGo,player2sGo);
};

Game.prototype.go = function(player1sGo,player2sGo) {
	var winningMoves = {
		'paper' 	: 'rock',
		'scissors' 	: 'paper',
		'rock'		: 'scissors'
	}

	if (winningMoves[player1sGo] == undefined || winningMoves[player2sGo] == undefined) {
		return false;
	} else if (winningMoves[player1sGo] == player2sGo) {
		return 1;
	} else if (winningMoves[player2sGo] == player1sGo) {
		return 2;
	} else if (player1sGo == player2sGo) {
		return 0;
	}
};

Game.prototype.displayChoices = function(player1sGo,player2sGo) {
	var player1sGoHolder = document.getElementById("myGuess");
	if (player1sGoHolder != null) {
		player1sGoHolder.innerHTML = player1sGo;
		player1sGoHolder.className = "";
		setTimeout(function(){
			player1sGoHolder.className = player1sGo;
		},1010);
	}
	var player2sGoHolder = document.getElementById("computersGuess");
	if (player2sGoHolder != null) {
		player2sGoHolder.innerHTML = player2sGo;
		player2sGoHolder.className = "";
		setTimeout(function(){
			player2sGoHolder.className = player2sGo;
		},1010);
		
	}
};

Game.prototype.calcutateResultsMessage = function(result,player1sGo,player2sGo) {
	var resultsMessage;
	var resultMessageSnippets = {
		error		: "Woops! There was an error!",
		draw 		: "It's a draw!",
		beats		: " beats ",
		winnerWas	: " - the winner was player ",
		youWin		: " - you win :)",
		youLose		: " - you lose :("
	}
	if (result === 0) {
		resultsMessage = resultMessageSnippets.draw;
	} else if (result === false) {
		resultsMessage = resultMessageSnippets.error;
	} else {
		var winnerText;
		if (result == 1) {
			resultsMessage = player1sGo + resultMessageSnippets.beats + player2sGo;
			winnerText = global.isComputerTurn ? resultMessageSnippets.winnerWas + result : resultMessageSnippets.youWin;
		} else {
			resultsMessage = player2sGo + resultMessageSnippets.beats + player1sGo;
			winnerText = global.isComputerTurn ? resultMessageSnippets.winnerWas + result : resultMessageSnippets.youLose;
		}
		resultsMessage += winnerText;
	}
	resultsMessage = this.initialCaps(resultsMessage);
	return resultsMessage;
};

Game.prototype.initialCaps = function(string) {
	 return string.charAt(0).toUpperCase() + string.slice(1);
};

Game.prototype.displayResult = function(result,player1sGo,player2sGo) {
	var resultHolder = document.getElementById("result");
	if (result == 0) {
		resultHolder.className = "";
		resultHolder.innerHTML = this.calcutateResultsMessage(result,player1sGo,player2sGo);
		setTimeout(function(){
			resultHolder.className = "draw";
		},1010);
	} else if (resultHolder != null) {
		resultHolder.className = "";
		resultHolder.innerHTML = this.calcutateResultsMessage(result,player1sGo,player2sGo);
		setTimeout(function(){
			resultHolder.className = (result == 1) ? "win1" : "win2";
		},1010);
	}
};