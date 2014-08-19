function Init() {

	global.init = {
		links : [
			"rock",
			"paper",
			"scissors",
			"computer"
		]
	};

	global.init.links.map( function(choice) {
		var el = document.getElementById(choice);
		if (el != null) {
			el.addEventListener("click", function(evt) {
				evt.preventDefault();
				var move = new Move();
				move.choose(choice);
			}, false);
		}
	});

}