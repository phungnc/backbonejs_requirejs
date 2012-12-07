(function () {
	'use strict';
	console.log('main.js: START!');

	var config = {}, underscore, bootstrap, cache;

// Add cache
	cache = require({context: 'cache' });

	cache(['jquery-1.6.4', 'cache'], function (a, cache) { cache.prime(true); });

	underscore = require({context: 'underscore' });
	bootstrap = require({context: 'bootstrap' });

	underscore(['underscore'], function (_){
		window._ = _; // move underscore to global namespace for backbone
		bootstrap(['json2', 'order!jquery-1.6.4', 'order!backbone', 'order!backbone-localstorage', 'order!app.js'], function (a, b, c, d, app){
			app.init();
		});
	});
console.log('main.js: END!');
}());