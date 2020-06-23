<<<<<<< HEAD
"use strict";

const error = require("../controller/error");

module.exports = [
  {
    method: "*",
    path: "/{any*}",
    handler: error.notFound,
  },
];
=======
'use strict';

const error = require('../controller/error');

module.exports = [
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: '*',
    path: '/{any*}',
    handler: error.notFound,
  },
];
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
