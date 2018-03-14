# typescript-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/amir-arad/typescript-boilerplate-app.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/amir-arad/typescript-boilerplate-app.svg?branch=master)](https://travis-ci.org/amir-arad/typescript-boilerplate-app)

Generic project boilerplate for isomorphic TypeScript

### project features
 - Typescript in strict mode (the only way to roll!)
 - Customised 3rd parrty typings in `./custom_typings` folder
 - Fully automated tests that run both in node and browser using mocha + chai
 - Test tools set-up phase that is loaded prior to any test being run
 - Automatically discoverable tests (by glob pattern defined in package.json)
 - Dev server for live updates in browser and transpiled files 
 - Least opinionated setup: no run time dependencies and minimal configuration

## developer documentation
how to build and test:
 - clone the repository
 - in the cloned folder, run `npm install`
 - run `npm test` to build and test the code in both nodejs and browser

how to debug (browser):
 - run `npm start` to run a development server
 - open `http://localhost:8080/test.bundle` to run live tests that will update while you change the source code
