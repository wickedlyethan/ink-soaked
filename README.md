# ink-soaked

_ink-soaked_ is a template for creating hypertext fiction that acts like most [Twine](https://twinery.org/) story formats, but your story content written in inkle's powerful scripting language [ink](https://www.inklestudios.com/ink/). 

All I did was lightly edit the template created by inkle's IDE, [Inky](https://github.com/inkle/inky), which renders ink stories into HTML and Javascript using the fantastic port of the ink compiler by [y-lohse](https://github.com/y-lohse/inkjs). My edits include erasing each page once a choice is made, mimicking Twine and other hypertext fiction, and creating a template for using ink's tags system for formatting.

- [How to Use](#how-to-use)
- [Using Tags](#using-tags-for-formatting)
- [Customizing Your Story](#customizing-your-story)

## How to Use

First off, get ink's IDE, [Inky](https://github.com/inkle/inky). This will let you write ink stories and test them in the same window, which is great. (One of the best features of ink is being able to write in **any** text editor, but Inky is a great place to start.) This is also the program we're using to convert our ink stories to JavaScript, so you can't really work without it!

Once your story has been written or you want to test it, go into Inky and navigate to `File -> Export story.js only...` Save that JavaScript (.js) file in the `ink-soaked` folder where you will see these files:

- `index.html` (the webpage itself)
- `style.css` (the cascading style sheet for customizing the look of your story)
- `ink.js` (y-lohse's port of the ink engine - best not touch that.)
- `main.js` (controls how the ink story is rendered on the webpage - we'll come back to this)
- `untitled.js` (I've included the default demo ink file from inkle, with two tags added to show off the tag "feature" I've added.)

Save your JS file with any name you want.

Now, open `index.html` in your favorite text editor and replace `untitled.js`with the filename of **your** JS file, and replace the `<title>` attribute in the `<head>`of the HTML file with the title of your story.

Now, double-click `index.html` to launch it, and voilà! Your ink story is now playable in any modern web-browser, and is even mobile-responsive. Unlike the default web template from Inky, it will erase each page, like most Twines. 

## Using Tags for Formatting

ink has an incredibly powerful [tags](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md#tags) system, which is for creating hooks into your game engine to use or modify text in interesting ways. (In past projects I've used this in Unity to change character art, visual-novel style, for example.) Here, because ink is not hooking into a traditional game engine, its functionality is more limited, but can still be used for all sorts of things! 

In `main.js` there is now an *if* statement that checks the first tag on any line - if there is no tag, it simply creates an HTML paragraph. If there is `h1` or `h2`, it will create HTML elements of headers size 1 or 2, respectively. This is a simple implementation for creating titles or bigger, more emphasized text for certain lines, but if you know HTML or Javascript you can do some wild things, including creating `spans` with specific formatting or other magic. Go nuts! All you need to do is create another *else if* in that `main.js` file.

(There may be a more efficient way to do this not utilizing many *if else*s, but I am not a masterful coder! If you have a better way of doing it, [please tell me](https://twitter.com/wickedlyethan)!)

## Customizing Your Story

Inkle did a marvelous job of creating a simple, lovely web template for easily playing your ink stories in a browser, and they included a CSS sheet ready to go!

I've added a few minor modifications to make choice text more apparent and left-aligned, much like in Twine 2's default story format, Harlowe, but the beauty of CSS is [anyone can do it](https://www.w3schools.com/css/)! Make your story beautiful!

### Images

Inserting images is incredibly easy: simply insert an HTML `img` tag as its own line anywhere in your ink script, with the correct `src` path for the image. The CSS included in this template will make it fit into the current story container. For example:

```
<img src="images/1.jpg">
- I looked at Monsiuer Fogg
*   ... and I could contain myself no longer.
```

You can then customize what your images look like using any traditional CSS classes that you then declare in your `img` tag, like so: `<img class="blur" src="images/1.jpg">`.

### Metadata and Other Finishing Touches

Your first impression is always important, and there are some finishing touches you should put on your project before you publish! 

1) A friendly reminder to _spellcheck_ because with interactive fiction a spelling error is the same as a bug. (Emily Short said that, though I can't find where, but that means it's very real.)

2) Change the `<title>` property in your final HMTL file. By default it is "untitled" and that's what will show up as the name of the tab on someone's web browser - change this to the title of your game! Also change the values for "author" and "description" right near there, even just as a way to sign your name.

3) Consider implementing the [Open Graph Protocol](http://ogp.me/) and [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started) `meta` tags. If you plan on sharing your project on social media, or serious about getting people to read it in general, consider utilizing Facebook and Twitter's code that makes your project look great when shared. They give you a lot of control over how your work gets shared, and it looks very professional if done right.

---

For full transparency, I also minify'd the code for `ink.js` using [JSCompress](https://jscompress.com/) - this was as much a psychological thing (so I wouldn't touch it) as it was an efficiency move (it cut out 55% of the file, making the whole folder to excatly 100kb, which is good for a webpage.)

Additionally, if you wanted to be a bit crazy, or if you want to host on your own website or Itch.io, you can in fact take all the scripts and combine them into the `index.html` file - be careful, and consider compressing the javascript when you do so, but this will make launching your game even easier! (This is what I've done with the demo story included at the root of the repo - all the javascript, including the story itself, and CSS is in that one HTML file, and it's only ~100kb.)