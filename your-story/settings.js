/* ----- ink-soaked settings ----- */
/* Here I've created a bunch of JavaScript variables
so that you can easily customize your story!
These are not for the look, but for the _feel_ of your story. */

// Variable that controls whether the page is erased after a choice or not
var ActLikeTwine = true;

/* ----- Modal Setting ----- */
// If you don't want the modal, turn this to false
var HaveModal = true;

/* ----- Text Timing Variables ----- */
// Choose whether to have a delay between each line of body text 
var delayText = true;
// Delay between each line of body text rendering
var textDelay = 500.0;

// Choose whether to render choices immediately after the body text or have a delay
var waittoRenderChoices = true;
// Delay between body text and choice text rendering
var bodytoChoicesDelay = 1000.0;

// Choose whether to render all choices at once or with a delay between them
var delayBetweenChoices = true;
// Delay between delay between lines of choice
var choiceDelay = 500.0;

/* ----- Functions ----- */
function toggleFlow(){
    ActLikeTwine = !ActLikeTwine;
    console.log("ActLikeTwine = " + ActLikeTwine);
}

window.onload = function() {
	if (HaveModal == false){
	    var element = document.getElementById("myModal");
		element.remove(element);
		element = document.getElementById("myBtn");
		element.remove(element);
	}
}