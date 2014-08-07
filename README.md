# Rock, Paper, Scissors

A simple client-side app to play Rock, Paper, Scissors.

## Tech used

### Main tech
* HTML
* CSS
* Javascript

### Stack tech
* Jasmine
* Grunt
* Grunt-contrib-jasmine
* Git

## Browser support

The app should work in modern browsers. I've tested it on an iPhone 5, Safari, Chrome etc.

## Notes

* See the github repo history, to see how I built up the app in the early stages.

## Next steps

This in an MVP.

Things I'd like to do next would be:

* Use web sockets with Node or Sinatra back end to allow you to play against other people
* Add option to play Rock, Paper, Scissors, Lizard, Spock
* Increase test coverage on DOM-related elements of the JS
* UI improvements, inc:
	* Think of a way to include all content above the fold on iPhone / mobile landscape view (e.g. put nav at side)
	* Do more work on illustrations
	* Think about more interesting animations
	* Do retina versions of all images, not just logo
	* Come up with a better logo

## Hosted version
There is a version of the application hosted on Github pages at [http://richquick.github.io/rock-paper-scissors/](http://richquick.github.io/rock-paper-scissors/)

## Specs

To run specs from command line use (requires Node & [Grunt installed](http://gruntjs.com/getting-started)):

	grunt jasmine:all

You can also see specs in the browser:

[http://richquick.github.io/rock-paper-scissors/SpecRunner.html](http://richquick.github.io/rock-paper-scissors/SpecRunner.html)