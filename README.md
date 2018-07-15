# ink-soaked

**ink-soaked** is a template for creating hypertext fiction that acts like most [Twine](https://twinery.org/) story formats, but your story content written in inkle's powerful scripting language [ink](https://www.inklestudios.com/ink/). 

This is hopefully a useful tool for publishing ink stories that can be played in any modern web browser, whether on desktop or mobile.

- [Getting Started](#getting-started)
- [Features](#features)
- [Customizing Your Story](#customizing-your-story)
- [Metadata and Other Finishing Touches](#metadata-and-other-finishing-touches)

## Getting Started

1) Download this repo and extract. You'll be working out of the folder `your-story`
2) Get ink's IDE, [Inky](https://github.com/inkle/inky)s
3) Load your .ink file in Inky and navigate to `File -> Export story.js only...`
4) Re-name the exported file to the title of your story and put it in the `your-story` folder
5) Go into `index.html` and Find & Replace the phrase `your-story` with the name of your .JS file

Now, double-click `index.html` to launch it, and voilà! Your ink story is now playable in any modern web-browser, and is even mobile-responsive. Unlike the default web template from Inky, it will erase each page, like most Twines.

This is all assuming, of course, that you've already written a story using ink! If you haven't and need somewhere to get started, obviously check out Inkle's [official writing tutorial](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md).

Here's what's in the `your-story` folder:

- `index.html` (The web-page itself)
- `style.css` (The cascading style sheet for customizing the look of your story)
- `ink.js` (y-lohse's port of the ink engine - best not touch that.)
- `main.js` (Controls how the ink story is rendered on the web-page)
- `modal.js` (This is a tiny JavaScript file for the modal, more on that later)
- `settings.js` (This is a JavaScript file full of variables you can change to customize your story!) 
- `your-story.js` (I've included the default demo ink file from inkle, with two tags added to show off the tag "feature" I've added.)

## Features

### Page Flipping

What do I mean "acts like Twine"? Well, with most Twine stories, when the player makes a choice, the entire page re-renders and displays a new passage, as if the player flipped the page of a book. This is an incredibly strong kinaesthetic feeling, great for delivering jokes, ramping up tension, or signaling the passage of time.

The default Inky story export does not do this, instead pinning the new text to the bottom of the page, creating an endlessly scrolling story. This is **also** an incredibly strong kinaesthetic feeling, but for longer stories might prove unwieldy.

With **ink-soaked** you have both options, and you can even toggle it on-the-fly. At the end of any line in ink that is not a choice you can pass `#toggleFlow` as a tag and the story will toggle this option. 

Say, for example, you want to make a conversation awkwardly long for the sake of comedy. The player so far has been used to the page-flipping style, so if the scene just keeps on going, it might be especially funny.

### Settings File

`settings.js` is a JavaScript file full of variables you can change to customize your story, giving you detailed control over text timing and the basic behavior of your story. This is where I'll try to keep implementing features, so that you have finite control over all sorts of things.

### The Modal

By default a new **ink-soaked** story will show a hamburger menu icon in the top-right corner. Clicking on that will activate an incredibly basic modal window on top of your story, functioning as somewhere to put important story information, information about you the author, or simply as a pause menu so that someone can put their phone down without worrying about tapping the screen by accident.

If you don't want this modal, simple go into `settings.js` and change `HaveModal` to equal `false`.

To edit the modal, go into `index.html` and edit the content inside the "modal-content" div. (Except for the `<span class="close"`, that's the button for the player to close the modal!)

### Using Tags for Formatting

ink has an incredibly powerful [tags](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md#tags) system, which is for creating hooks into your game engine to use or modify text in interesting ways. (In past projects I've used this in Unity to change character art, visual-novel style, for example.) Here, because ink is not hooking into a traditional game engine, its functionality is more limited, but can still be used for all sorts of things! 

In `main.js` there is now an *if* statement that checks the first tag on any line - if there is no tag, it simply creates an HTML paragraph. If there is `h1` or `h2`, it will create HTML elements of headers size 1 or 2, respectively. This is a simple implementation for creating titles or bigger, more emphasized text for certain lines, but if you know HTML or JavaScript you can do some wild things, including creating `spans` with specific formatting or other magic. Go nuts! All you need to do is create another *else if* in that `main.js` file.

Do note that currently anything other than a regular paragraph does **not** obey the text fading settings, that's something I'm working on.

## Customizing Your Story

Inkle did a marvelous job of creating a simple, lovely web template for easily playing your ink stories in a browser, and they included a CSS sheet ready to go!

I've added a few minor modifications to make choice text more apparent and left-aligned, much like in Twine 2's default story format, Harlowe, and to have a strong emphasis on readability and mobile-responsiveness. But the beauty of CSS is [anyone can do it](https://www.w3schools.com/css/)! Make your story beautiful!

### Text Timing

In the `settings.js` file there are a lot of variables for the exact timing of text appearing on the screen. This was inspired by Joseph Humfrey's wonderful essay on ["Designing Text UX for Effortless Reading"](https://youtu.be/mopBSNyFEE4), and while the defaults aren't perfect, they create a relaxing, simple reading experience.

However, this tool is about control, so there are broad boolean variables for disabling these behaviors. You can make all the text and choices render simultaneously, have a delay between choices and body text, have a delay only between different choices, etc. 

If you'd like to change the behavior of the text itself fading in, that is done on line 34 of `style.css`, where the story text is set to an opacity of 0, then gains an attribute that makes it fade in. Simply change the opacity from 0 to 1 and the text will not fade in, as well as disable all fade timing.

### Images

Inserting images is incredibly easy: simply insert an HTML `img` tag as its own line anywhere in your ink script, with the correct `src` path for the image. The CSS included in this template will make it fit into the current story container, as if it is a line of text. For example:

```
<img src="images/1.jpg">
- I looked at Monsiuer Fogg
*   ... and I could contain myself no longer.
```

## Publishing Your Story

### Metadata and Other Finishing Touches

Your first impression is always important, and there are some finishing touches you should put on your project before you publish! 

1) A friendly reminder to _spellcheck_ because with interactive fiction a spelling error is the same as a bug. (Emily Short said that, though I can't find where, but that means it's very real.)

2) Change the `<title>` property in your final HMTL file. By default it is "untitled" and that's what will show up as the name of the tab on someone's web browser - change this to the title of your game! Also change the values for "author" and "description" right near there, even just as a way to sign your name.

3) Consider implementing the [Open Graph Protocol](http://ogp.me/) and [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started) `meta` tags. If you plan on sharing your project on social media, or serious about getting people to read it in general, consider utilizing those sets of Facebook and Twitter code that makes your project look great when shared. They give you a lot of control over how your work gets shared, and it looks very professional if done right. You might want to create a cover image and use it in that metadata as well.

### Publishing to Itch.io

To publish to Itch.io, all you have to do is zip the `your-story` folder (or whatever you've re-named it to) and upload it as an HTML5 project. That's it!

### Publishing to GitHub Pages

To publish to GitHub Pages, you would create a repository that is your working files, then make the `master` branch into the source for a GitHub Page. The default URL for your story would be `your-story.github.io`, but you can get custom URLs for GitHub Pages very easily. Read more about GitHub Pages [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/).

### Single Executable

(Note: this hasn't been updated to include the settings and modal yet, so it's out of date, will fix soon.)

If you want to be a bit crazy, you can in fact take all the scripts and combine them into the `index.html` file - be careful, and consider compressing the JavaScript when you do so, but this will make launching your game pretty fool-proof, and a bit easier to email. (This is what I've done with the demo story included at the root of the repo - all the JavaScript, including the story itself, and CSS is in that one HTML file, and it's only ~100kb.)

You do need to be careful about the order in which you place them, however. So, before the closing `<body>` tag, take the compressed (I recommend [JSCompress](https://jscompress.com/)) versions of these scripts and put them in their own `<script>` tags, in this order:

```
Ink.js
your-story.js
main.js
```

---

For full transparency, I also minify'd the code for `ink.js` using [JSCompress](https://jscompress.com/) - this was as much a psychological thing (so I wouldn't touch it) as it was an efficiency move (it cut out 55% of the file, making the whole folder to excatly 100kb, which is good for a webpage.)