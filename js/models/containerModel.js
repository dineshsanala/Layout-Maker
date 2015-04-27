define(function () {
	var containerModel;
	containerModel = Backbone.Model.extend({
		defaults: {
            title: "My Container"
        },

      	initialize: function(){
          	console.log("Container Model Instantiated.");
      	}
  	});
	return containerModel;
});