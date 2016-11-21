# react-es6-boilerplate

> Project tested with node v 6.2.2

A very basic boilerplate to start your React Javascript project with [ES6](https://babeljs.io/docs/learn-es2015/) script [Browserify](http://browserify.org/) module bundler and [Less](http://lesscss.org/) css preprocessor.

- The aim of this package is to start basic web project which usually have JS and css (less css) files, build them for release by compiling ES2015 code and concatenate multiple js and css files into single bundle.


> Normally if you require a module, you import the whole thing. ES2015 lets you just import the bits you need, without mucking around with custom builds. It's a revolution in how we use libraries in JavaScript, and it's happening right now.

- Bundling done with simple commands using [Gulp](http://gulpjs.com/) which is famous build system to automate build process.


## Install

First, clone the repo via git:

```bash
git clone https://github.com/mizmaar3/react-es6-boilerplate your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```


## Build

Run this command to build and bundle the project.

```bash
$ npm run build
```

or simple run

```bash
$ gulp
```

To get minified+uglified version of bundle.js please run

```bash
$ npm run release
```


inside your project folder


## Start Server

To start local server please run

```bash
$ npm run start
```

and goto http://127.0.0.1:9800 to test if code worked. You should get some text on the page.

.
