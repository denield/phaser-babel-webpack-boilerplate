# Phaser 3 + Webpack 4 boilerplate

## The Stack

- [Phaser 3](https://phaser.io/) (Game-engine)
- [Babel 7](https://babeljs.io/) ([preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)) (Transpiler)
- [Webpack 4](https://webpack.js.org/) (Module bundler)
- [Jest 22](https://facebook.github.io/jest/) (Unit test runner)

## Requirements
- Node JS 8 (probably will work with 6 but haven't tested)

## How to use

First, install the dependencies:
```
$ npm install
```

Then you can use the following commands:

```
$ npm start     // run the development server with hot reloading feature enabled on http://localhost:8080
$ npm run build // create production build into the dist/ folder
$ npm run test:unit  // run jest tests
```