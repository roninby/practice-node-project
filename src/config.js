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
};
