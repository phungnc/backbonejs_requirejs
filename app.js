// app.js is a more standard naming convention. 
define (['collections/todos', 'views/app', 'models/todo'], function (todosColl, appView, todosModel){
	'use strict';

	var module = {};

	module.init = function (){
		console.log("app.init(): START");
		var collection = todosColl.create(),
				model = todosModel.create({'collection' : collection});

		collection.model = model;
		console.log("app.init(): END");
		return appView.create({'collection' : collection});
	};

	return module;
});