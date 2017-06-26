# typescript-boilerplate
[![Build Status](https://travis-ci.org/wix/typescript-boilerplate.svg?branch=master)](https://travis-ci.org/wix/typescript-boilerplate)

Generic project boilerplate for isomorphic TypeScript

### project features
 - Typescript in strict mode (the only way to roll!)
 - customised 3rd parrty typings in `./custom_typings` folder
 - Fully automated tests that run both in node and browser using mocha + chai
 - Test tools set-up phase that is loaded prior to any test being run
 - Automatically discoverable tests (by glob pattern defined in package.json)
 - dev server for live updates in browser and transpiled files 

## developer documentation
how to build and test:
 - clone the repository
 - in the cloned folder, run `npm install`
 - run `npm test` to build and test the code in both nodejs and browser

how to debug (browser):
 - run `npm build:watch` to start transpiling all source files to es5 whenever they change (CTR+c to exit)
 - in a different window, run `npm start` to run a development server that watches the es5 files and serves them to the browser
 - open `http://localhost:8080/webtest.bundle` to run live tests that will update while you change the source code


