## InCyVerse

[![Ruby](https://img.shields.io/badge/ruby-3.3.0-blue.svg?style=flat)]()
[![Jekyll](https://img.shields.io/badge/jekyll-4.4.3-blue.svg?style=flat)]()

This is a full-featured port of Ghost's default theme [Casper](https://github.com/tryghost/casper)
[v2.1.9](https://github.com/TryGhost/Casper/releases/tag/2.1.9)
for [Jekyll](https://jekyllrb.com/) / [GitHub Pages](https://pages.github.com/).

## Live Demo

___

[Jasper2](https://jekyllt.github.io/jasper2)

## Features

___

* Out of the box support for multiple authors (via `_data/authors.yml`)
* Full author information including: picture, bio, website, twitter, facebook, etc.
* Tag description(s) and personalised covers (via `_data/tags.yml`)
* Related posts view at the bottom of each post
* All Ghost default pages: Author page(s), Tag page(s), About page(s), 404, etc.
* Pagination (infinite scrolling or standard pagination, i.e. posts across multiple pages)
* Atom Feeds by [Jekyll-feed](https://github.com/jekyll/jekyll-feed)
* Toggleable subscribe button (requires an external service)
* Code Syntax Highlight with [highlight.js](https://highlightjs.org)
* Support for Google Analytics tracking
* Support for Disqus comments

## Getting Started

___

### Author Pages

In order to properly generate author pages you need to rename the field *author* in the front matter of every post
to match that of your each author's *username* as defined in the *[_data/authors.yml](_data/authors.yml)* file.  
With the latest update, multiple author blogs are now supported out of the box.

### Compiling Styles

Following on the way Casper styles are compiled as [described here](https://github.com/tryghost/casper#development):

Jasper2 styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally.
After that, from the theme's root directory:

```bash
$ npm install
$ gulp
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.
