Introduction
===

How do you code?  
The following exercise is your opportunity to show us your front-end skills.

- The task is to take the attached design and code it up as a static page.
- There is no time limit imposed. Please code up to the best of your ability.  
- Build everything you see. Use what you know to build the best quality page you can!
- We will be looking at all aspects of your end delivery. We are particularly interested in how you approach the exercise and understanding why you chose to do things a certain way.
- The task is aimed at applicants across all skill levels. Our only expectation is that you code to your ability.

## Task requirements

- Use HTML, CSS and JavaScript best practices.
- Build your components assuming this is a deliverable for a larger web application, so consider scalability, portability, extensibility.
- Please take performance into consideration.
- Please take accessibility into consideration.
- Make sure it works cross-browser.
	- Should work great on IE10, IE11, Edge (latest version), Chrome (latest version), Safari ( latest version) and FireFox (latest version).
	- Must be usable and look OK on IE9. We don't expect it to be beautiful.
	- Should work on most common mobile and tablet devices for iOS and Android.
- It needs to be platform agnostic. If it's hooked into a particular IDE or OS or needs complicated config we aren't going to be spending time to set it up.
- Things we use.
	- SASS
	- LESS
	- Jquery
	- React JS
    - CSS Modules
	- Gulp
	- Bower
	- NPM

## What we are looking for

How you code is your best tool, there are a few things we will be looking out for though.

- Explain/document your coding decisions. Inline commenting is your friend for this.
- We've deliberately not provided interaction states or layouts for mobile and other viewports. Consider how you can evolve the design.
- We don't just want to see the output. If you're using pre-processors, build tools etc we want to see all of that because that's a skill too, so make sure it's in your submission.

## Submitting your work

Send us a link to your code from a GitHub fork, Dropbox, Skydrive ... whatever.  
Please do not send attached zip files via email.  

**If there is any setup necessary please update this README.md file with a step by step guide.**

**Please gitignore any build dependencies such as /node_modules. We will get them in the build.**
  
---

## Help! I can't open the design

The design is provided in various formats.
- **Sketch** : Our favourite. If you're on Mac you can get a [free trial of Sketch App](https://www.sketchapp.com/).
- **Zeplin** : Providing Sketch documents for developers - you might need to sign up for a trial to [access our Zeplin project](http://zpl.io/OrAI).
- **PDF & PNG** : Hopefully you won't need this fallback, let us know if that's all you had to work from.

## Getting up and running

Checkout the codebase, make sure you have Gulp.js installed and run:
```
npm install
```

This will load all `node_modules` requried.

The next move is to run:
```
gulp pipeline-serve
```
This will start up the server and build everything you require.

In order to see the output in browser, navigate to localhost:8080 (8080 was used due to Cloud9).