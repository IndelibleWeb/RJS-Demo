define(function (require) {
	'use strict'
 var config = require('config');
 var appConfig = config.app;
	console.log('appConfig within a required file:',appConfig);
});