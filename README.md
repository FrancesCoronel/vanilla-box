# vanilla-box

<!-- [![GitHub Issues](https://img.shields.io/github/issues/fvcproductions/vanilla-box.svg?style=flat-square)](https://github.com/fvcproductions/vanilla-box/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/fvcproductions/vanilla-box.svg?style=flat-square)](https://github.com/fvcproductions/vanilla-box/pulls) [![MIT License](https://img.shields.io/github/license/fvcproductions/vanilla-box.svg?style=flat-square)](http://badges.mit-license.org) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](http://paypal.me/fvcproductions) [![Become a Patron!](https://img.shields.io/badge/Patreon-Become%20a%20Patron!-orange.svg?style=flat-square)](https://www.patreon.com/fvcproductions) -->

A sweet image lightbox gallery created with just vanilla 🍦 JS.

![Teaser Image](https://i.imgur.com/bUod3KL.png)

> View this project at [`fvcproductions.github.io/vanilla-box`](https://fvcproductions.github.io/vanilla-box)

---

<!-- TOC depthFrom:2 -->

* [Requirements](#requirements)
  * [Evaluation](#evaluation)
  * [Criteria](#criteria)
  * [Submission](#submission)
* [Overview](#overview)
  * [Branding](#branding)
  * [Custom Search Engine](#custom-search-engine)
  * [Google Custom Search API](#google-custom-search-api)
  * [Tools Used](#tools-used)
* [Testing](#testing)
  * [Browser Support](#browser-support)
    * [Chrome](#chrome)
    * [Firefox](#firefox)
    * [Internet Explorer](#internet-explorer)
    * [Opera](#opera)
    * [Safari](#safari)
  * [Lighthouse](#lighthouse)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [Code of Conduct](#code-of-conduct)

<!-- /TOC -->

## Requirements

> Taken from the email I received.

This exercise is meant to demonstrate your ability to:

* Access a public API and successfully retrieve data from it;
* Display that data on a page;
* Update the UI of a page without refreshing;
* Build a polished user experience you'd be proud to ship; and
* Do all of the above using only native JavaScript (no libraries such as jQuery or React, although CSS and JavaScript preprocessors and polyfills are fine).
  * Please stick to JavaScript (e.g. not TypeScript or similar languages) for this exercise, and please ensure that all application code is your own.
* We'd like you to create a web page that shows a grid of photo thumbnails;
  * when a thumbnail is clicked, the photo should be displayed in a lightbox view, with the ability to move to the next / previous photos and display the photo title.
* You can use any public API that returns photos; here are some ideas:
  * [Flickr](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)
  * [Google Image Search](https://developers.google.com/custom-search/json-api/v1/overview)

### Evaluation

Your changes will be graded based on adherence to

* product and design requirements,
* performance,
* browser support,
* code readability and organization,
* error handling,
* lack of defects,
* and documentation.

### Criteria

We’ll get back to you within a week of your submission with the outcome. Please note that we will not provide you with detailed feedback on the exercise.

You have one week to complete your exercise, but please keep us posted if you end up needing more time.

Your submission must run without errors in the latest versions of Chrome, Safari, Firefox, and Edge.

### Submission

When you’re finished, please send us:

* A URL where the working lightbox can be seen
* Your source code as a zipped Git repository
  * Create a local repo for your code and commit your files as you normally would; when the exercise is complete, zip your main directory, including the .git directory, and send it to us
  * **Note** If you use GitHub, please make your repo private or remove it after you submit your work. We wouldn't want someone to submit your work as their own later!
* Please provide all source code via a Git repository – create a local repo for your code, and when the exercise is complete, please tar or zip your main directory and send it along to us (and please remember to include your .git directory/files).
* Please be sure to submit using the (GreenHouse) link provided in this email.
* If you have any notes or instructions about the exercise, please include them in a README.md file in your repo.
* We have implemented discretionary measures to ensure personal information is not associated with coding exercises. This enables the grader to make unbiased decisions, so we ask that you do not include your name anywhere in the code or documentation.

## Overview

### Branding

I created the logo for "Vanilla Box" using [Sketch](https://www.sketchapp.com/).

The Sketch file used can be found [here]().

I used [IconFinder](https://www.iconfinder.com/icons/1517207/colorful_dessert_food_ice_cream_icon#size=512) to start off.

The colors used to create the vanilla ice cream logo are the same as [Slack's brand colors](https://brandcolors.net/b/slack).

![Logo](https://i.imgur.com/sGT98Z4.png)

### Custom Search Engine

The Custom Search Engine (CSE) public URL for this project can be found [here](https://cse.google.com/cse/publicurl?cx=008213476470887739041:kbgbn6nopny).

The Custom Search Engine (CSE) was configured using the following settings:

![Custom Search Engine](https://i.imgur.com/iTzUj8f.png)

### Google Custom Search API

I am fetching the images from the [Google Custom Search API](https://developers.google.com/custom-search/json-api/v1/overview).

I limited the API to fetching 9 images since the max is 10 at one time and the layout has 3 columns.

I created an [API key](https://console.cloud.google.com/apis/credentials) and [Custom Search Engine (CSE) id](https://cse.google.com) in order for the API to work.

### Tools Used

* [BrandColors](https://brandcolors.net)
* [Browserling](https://www.browserling.com/)
* [CodeKit](https://codekitapp.com/)
* [Favicon Generator](https://realfavicongene)
* [GitHub Pages](https://pages.github.com)
* [GitHub](https://github.com)
* [Google Analytics](https://analytics.google.com)
* [Google Cloud Platform](https://console.cloud.google.com)
* [Google Custom Search](https://cse.google.com)
* [IconFinder](https://www.iconfinder.com)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [PWA Builder](https://www.pwabuilder.com/)
* [Shields.io](http://shields.io/)
* [Sketch](https://www.sketchapp.com/)

## Testing

### Browser Support

I tested the website on all major browsers.

#### Chrome

> Version 65.0.3325.181 (Official Build) (64-bit)

![Chrome](https://i.imgur.com/VUcFvOV.png)

#### Firefox

![Firefox](https://i.imgur.com/KHErgPG.png)

#### Internet Explorer

[Browserling](https://www.browserling.com/) was used for this browser since I only own a MacBook Pro.

> Windows Vista - Internet Explorer 9

![IE 9](https://i.imgur.com/xWTLyBP.png)

> Windows 7 - Internet Explorer 11

![IE 11](https://i.imgur.com/ZuDXgc5.png)

#### Opera

> Version 52.0.2871.30

![Opera](https://i.imgur.com/ly1NqB3.png)

#### Safari

> Version 11.0.3 (13604.5.6)

![Safari](https://i.imgur.com/ULKrE84.png)

### Lighthouse

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an open-source, automated tool created by Google for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, and more.

I made Vanilla Box a [Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/) since it's a topic I'm passionate about.

When I ran Lighthouse on Vanilla Box, the following results were:

## Deployment

The source code is on GitHub in a [private repo](https://github.com/fvcproductions/vanilla-box).

I used [CodeKit](https://codekitapp.com/) to compile the SASS files to CSS with minification and to check the JS syntax with ESLint and transpile the JS with Babel. I also set it up so all files were minified and all images were optimized.

The website is deployed using [GitHub Pages](https://pages.github.com).

## Contributing

> Heads up, I think it's important to have a "Contributing" section for any project but this is a private repo.

> To get started...

1.  🍴 [Fork this repo](https://github.com/fvcproductions/vanilla-box#fork-destination-box)
2.  🔨 View the contributing guidelines at [CONTRIBUTING.md](CONTRIBUTING.md)
3.  👥 Add yourself as a contributor under the credits section
4.  🔧 [Open a new pull request](https://github.com/fvcproductions/vanilla-box/compare)
5.  🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/fvcproductions/vanilla-box/issues) - any little bit of help counts! 😊

## Code of Conduct

> Heads up, similar to the "Contributing" section of this README, I think it's important to have a "Code of Conduct" for any project but this is a private repo.

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

More details can be found at this project's [code of conduct](.github/CODE_OF_CONDUCT.md).
