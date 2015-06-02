require(['config'], function(config){
	var config = config.app;
	console.log('config object in main.js',config);
	var Themodule = require(['js/app/module']);
	var aModule = new Themodule();
	if (document.querySelector(config.selectorTrigger) !== null) {
		console.log('has the trigger selector (in the config) in the page')
		require(['js/app/some-module']);
	}
});