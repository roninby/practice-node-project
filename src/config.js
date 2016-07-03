'use strict';

/**
* practice Node.js project
*
* @author Ryan <roninby@yeah.net>
*/

module.exports = function (set, get, has) {

// Server listening port
  set('web.port', 3000);

//session secret
  set('web.session.secret', 'test');

//session redis connection
  set('web.session.redis', {
    host: '127.0.0.1',
    port: 6379,
  });
  
};
