/*
List of HTML elements that can be used in-line in ink-soaked:
- <em>
- <b> (Not great, but maybe)
- <i> (Not great, but maybe)
- <del>
*/

var ActLikeTwine = true;
var scrollToBottomTrue = true;

/* ----- Text Timing Variables ----- */
// Originally 75 & 200.0, in *milliseconds*

// Delay between each line of text rendering
var textDelay = 500.0;

// Delay between delay between lines of choice
var choiceDelay = 500.0;

// Delay between body and choices rendering
// Originally = false
var waittoRenderChoices = true;
var bodytoChoicesDelay = 2000.0;

// Choose whether to render all choices at once or with a delay between them
// Originally = true;
var delayBetweenChoices = false;

/* ----- Functions ----- */
function toggleFlow(){
    ActLikeTwine = !ActLikeTwine;
    console.log("ActLikeTwine = " + ActLikeTwine);
}