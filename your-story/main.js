(function(storyContent) {

    var story = new inkjs.Story(storyContent);

    var storyContainer = document.querySelectorAll('#story')[0];

    function showAfter(delay, el) {
        setTimeout(function() { el.classList.add("show") }, delay);
    }

    function scrollToBottom() {
        var progress = 0.0;
        var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dist = document.body.scrollHeight - window.innerHeight - start;
        if( dist < 0 ) return;

        var duration = 300 + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t;
            window.scrollTo(0, start + lerp*dist);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function continueStory() {

        var paragraphIndex = 0;
        var delay = 0;

        // Generate story text - loop through available content
        while(story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            
            var paragraphElement = document.createElement("p");
            
            // From Ethan - checks the current tag and creates different elements
            // Add as many as you want using this pattern!
            if (story.currentTags[0] != undefined){
                var tags = story.currentTags;
                for (var i = 0; i < tags.length; i++) {
                    if (tags[i] == ("h1") || tags[i] == ("h2") || tags[i] == ("h3") || tags[i] == ("h4") || tags[i] == ("h5") || tags[i] == ("h6"))
                    {
                        var paragraphElement = document.createElement(tags[i]);
                    }
                }
                if (tags.includes("toggleFlow")){
                    toggleFlow();
                }
            }
            
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            if (delayText == true){
                // Fade in paragraph after a short delay
                showAfter(delay, paragraphElement);
                delay += textDelay;
            }
            else {
                showAfter(0, paragraphElement);
            }
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {
            
            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('p');
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // From Ethan - Delays rendering choices.
            if (waittoRenderChoices == true){
                setTimeout(drawChoices, bodytoChoicesDelay);
                // delay = 0;
            }
            else {drawChoices();}

            function drawChoices(){
                // If option to show all options simultaneously is set, don't delay between them
                if (delayBetweenChoices == false){
                    showAfter(0, choiceParagraphElement);
                }
                else{
                    // Fade choice in after a short delay
                    showAfter(delay, choiceParagraphElement);
                    delay += choiceDelay;
                }

            }

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function(event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                var existingChoices = storyContainer.querySelectorAll('p.choice');
                for(var i=0; i<existingChoices.length; i++) {
                    var c = existingChoices[i];
                    c.parentNode.removeChild(c);
                }

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                // Save state?

                if(ActLikeTwine){
                    // from Ethan - deleting all the contents to make it more Twine like!
                    document.getElementById("story").innerHTML = "";
                }

                // Aaand loop
                continueStory();
            });
        });
        if(scrollToBottomTrue){scrollToBottom();}
    }

    continueStory();

})(storyContent);