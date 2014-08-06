var global = {};

function Init() {

	var links = [
		"rock",
		"paper",
		"scissors",
		"computer"
	];

	links.map( function(choice) {
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