var global = {};

(function(){

  // Script loader

  global.scriptFiles = [
  	"Game",
  	"Move",
  	"Init"
  ]

  function load(script) {
  	var path = 'src/';
    document.write('<'+'script type="text/javascript" src="' + path + script + '.js"><' + '/script>');
  }

  global.scriptFiles.map( function(script) {
  	load(script);
  });

})();


window.addEventListener('load', 
  function() { 
    Init();
  }, false);
