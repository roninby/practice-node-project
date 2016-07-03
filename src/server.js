'use strict';

/**
* practice Node.js project
*
* @author Ryan <roninby@yeah.net>
*/

import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$ = new ProjectCore();

$.createDebug = function (name) {
  return createDebug('my:' + name);
};

const debug = $.createDebug('server');

//import config.js
$.init.add((done) => {
  $.config.load(path.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if (env) {
    debug('load env: %s', env);
    $.config.load(path.resolve(__dirname, '../config', env + '.js'));
    }
    $.env = env;
    done();
});

//Init Mongodb
$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));

// Import models
$.init.load(path.resolve(__dirname, 'models'));

//Import methods
$.init.load(path.resolve(__dirname, 'methods'));

//  Init Express
$.init.load(path.resolve(__dirname, 'init', 'express.js'));

// Import middleware
$.init.load(path.resolve(__dirname, 'middlewares'));

// Import route
$.init.load(path.resolve(__dirname, 'routes'));

// Init
$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]', $.env);
  }

//  require('./test');

/* DB Test
  const item = new $.model.User({
    name: `User${$.utils.date('Ymd')}`,
    password: '123456',
    nickname: 'Test User',
  });
  item.save(console.log);
*/

});
