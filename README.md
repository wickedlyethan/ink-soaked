# ink-soaked

This is a template for creating hypertext fiction that acts like [Twine](https://twinery.org/) but is written in inkle's scripting language [Ink](https://www.inklestudios.com/ink/). 

All I did was lightly edit the template created by inkle's IDE, [Inky](https://github.com/inkle/inky), which renders ink stories into HTML and Javascript using the fantastic port of the ink compiler by [y-lohse](https://github.com/y-lohse/inkjs). My edits include erasing each page once a choice is made, mimicking Twine and other hypertext fiction, and creating a template for using ink's tags system for formatting.

- [How to Use](##how-to-use)
- [Using Tags](##using-tags)
- [Customizing Your Story](##customizing-your-story)

## How to Use

First off, get ink's IDE, [Inky](https://github.com/inkle/inky). This will let you write ink stories and test them in the same window, which is great. (One of the best features of ink is being able to write in **any** text editor, but Inky is a great place to start.)

Once your story has been written or you want to test it, go into Inky and navigate to `File -> Export story.js only...` Save that JavaScript (.js) file in the `Ink-soaked` folder where you will see these files:

- `index.html` (the webpage itself)
- `style.css` (the cascading style sheet for customizing the look of your story)
- `ink.js` (y-lohse's port of the ink engine - best not touch that.)
- `main.js` (controls how the ink story is rendered on the webpage - we'll come back to this)
- `untitled.js` (I've included the default demo ink file from inkle, with two tags added to feature the tag feature I've added.)

Save your JS file with any name you want.

Now, open `index.html` in your favorite text editor and replace `untitled.js`with the filename of **your** JS file, and replace the `<title>` attribute in the `<head>`of the HTML file with the title of your story.

Now, double-click `index.html` to launch it, and voilà! Your ink story is now playable in any modern web-browser, and is even mobile-responsive. Unlike the default web template from Inky, it will erase each page, much like most Twines. 

## Using Tags

ink has an incredibly powerful [tags](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md#tags) system, which is for creating hooks into your game engine to use or modify text in interesting ways. (In past projects I've used this in Unity to change character art, visual-novel style.) Here its functionality is more limited, but it can still be used! 

In `main.js` there is now an *if* statement that checks the first tag on any line - if there is no tag, it simply creates an HTML paragraph. If there is `h1` or `h2`, it will create HTML headers of size 1 or 2, respectively. This is a simple implementation for creating titles or bigger, more emphasized text for certain lines, but people smarter than I could probably do some wild things with this, including creating `spans` with specific formatting or other magic. Go nuts! All you need to do is create another *else if* in that `main.js` file.

(There may be a more efficient way to do this not utilizing many *if else*s, but I am not a masterful coder! If you have a better way of doing it, [please tell me](https://twitter.com/wickedlyethan)!)

## Customizing Your Story

Inkle did a marvelous job of creating a simple, lovely web template for easily playing your ink stories in a browser, and they included a CSS sheet ready to go!

I've added just a few minor modifications to make choice text more apparent and left-aligned, much like in Twine 2's default story format, Harlowe, but the beauty of CSS is [anyone can do it](https://www.w3schools.com/css/)! Make your story beautiful!

---

For full transparency, I also minify'd the code for `ink.js` using [JSCompress](https://jscompress.com/) - this was as much a psychological thing (so I wouldn't touch it) as it was an efficiency move (it cut out 55% of the file, making the whole folder to excatly 100kb, which is good for a webpage.)

Additionally, if you wanted to be a bit crazy, or if you want to host on your own website or Itch.io, you can in fact take all the scripts and combine them into the `index.html` file - be careful, and consider compressing the javascript when you do so, but this will make launching your game even easier! (This is what I've done with the demo story included at the root of the repo - all the javascript, including the story itself, and CSS is in that one HTML file, and it's only ~100kb.)