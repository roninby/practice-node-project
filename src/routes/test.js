'use strict';

/**
* practice Node.js project
*
* @author Ryan <roninby@yeah.net>
*/

module.exports =  function (done) {
$.router.get('/', function (req, res, next) {
   res.end(`ÏÖÔÚÊÇ±±¾©Ê±¼ä${new Date()}`);
 });
 
 done();

};
