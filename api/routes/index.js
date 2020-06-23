<<<<<<< HEAD
"use strict";

const fs = require('fs');

let routes = [];

fs.readdirSync(__dirname)
  .filter(file => file != 'index.js')
  .forEach(file => {
    routes = routes.concat(require(`./${file}`))
  });

console.log(routes)

module.exports = routes;
=======
'use strict';

const continent = require('./continent');
const country = require('./country');
const topCountryRouter = require('./topCountryRouter');
const error = require('./error');

let routes = [...continent, ...country, ...topCountryRouter, ...error];

module.exports = routes;
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
