function Game() {
	global.game = {
		resultMessageSnippets : {
			error		: "Woops! There was an error!",
			draw 		: "It's a draw!",
			beats		: " beats ",
			winnerWas	: " - the winner was player ",
			youWin		: " - you win :)",
			youLose		: " - you lose :("
		},
		winningMoves : {
			'paper' 	: 'rock',
			'scissors' 	: 'paper',
			'rock'		: 'scissors'
		},
		guesses : {
			myGuess 		: "myGuess",
			computersGuess 	: "computersGuess"
		},
		cssClasses : {
			win 		: "win",
			draw		: "draw"
		}
	}
}

Game.prototype.play = function(player1sGo,player2sGo) {
	this.displayChoices(player1sGo,player2sGo);
	this.displayResult(this.go(player1sGo,player2sGo),player1sGo,player2sGo);
};

Game.prototype.go = function(player1sGo,player2sGo) {
	if (global.game.winningMoves[player1sGo] == undefined || global.game.winningMoves[player2sGo] == undefined) {
		return false;
	} else if (global.game.winningMoves[player1sGo] == player2sGo) {
		return 1;
	} else if (global.game.winningMoves[player2sGo] == player1sGo) {
		return 2;
	} else if (player1sGo == player2sGo) {
		return 0;
	}
};

Game.prototype.showChoice = function(go,goID,timer) {
	var goHolder = document.getElementById(goID);
	if (goHolder != null) {
		goHolder.className = "";
		goHolder.innerHTML = go;
		setTimeout(function(){
			goHolder.className = go;
		},timer);
	}
}

Game.prototype.showResult = function(result,resultID,resultClass,player1sGo,player2sGo,timer) {
	var resultHolder = document.getElementById(resultID);
	resultHolder.className = "";
	resultHolder.innerHTML = this.calcutateResultsMessage(result,player1sGo,player2sGo);
	setTimeout(function(){
		resultHolder.className = resultClass;
	},timer);
}

Game.prototype.displayChoices = function(player1sGo,player2sGo) {
	var timer = 1010;
	this.showChoice(player1sGo,global.game.guesses.myGuess,timer);
	this.showChoice(player2sGo,global.game.guesses.computersGuess,timer);
};

Game.prototype.displayResult = function(result,player1sGo,player2sGo) {
	var resultID = "result";
	var timer = 1800;
	var resultClass = (result >= 1) ? global.game.cssClasses.win + result : global.game.cssClasses.draw;

	this.showResult(result,resultID,resultClass,player1sGo,player2sGo,timer);
};

Game.prototype.calcutateWinnerMessage = function(result,player1sGo,player2sGo) {
	var winnerText;
	var winnerMessage;
	if (result == 1) {
		winnerMessage = player1sGo + global.game.resultMessageSnippets.beats + player2sGo;
		winnerText = global.isComputerTurn ? global.game.resultMessageSnippets.winnerWas + result : global.game.resultMessageSnippets.youWin;
	} else {
		winnerMessage = player2sGo + global.game.resultMessageSnippets.beats + player1sGo;
		winnerText = global.isComputerTurn ? global.game.resultMessageSnippets.winnerWas + result : global.game.resultMessageSnippets.youLose;
	}
	winnerMessage += winnerText;
	return winnerMessage;
}

Game.prototype.calcutateResultsMessage = function(result,player1sGo,player2sGo) {
	var resultsMessage;
	if (result === 0) {
		resultsMessage = global.game.resultMessageSnippets.draw;
	} else if (result === false) {
		resultsMessage = global.game.resultMessageSnippets.error;
	} else {
		resultsMessage = this.calcutateWinnerMessage(result,player1sGo,player2sGo);
	}
	resultsMessage = this.initialCaps(resultsMessage);
	return resultsMessage;
};

Game.prototype.initialCaps = function(string) {
	 return string.charAt(0).toUpperCase() + string.slice(1);
};