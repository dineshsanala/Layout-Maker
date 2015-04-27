define(function () {
	var containerModel;
	containerModel = Backbone.Model.extend({
		defaults: {
            xPath: "main[0]"
        },

      	initialize: function(){
          	console.log("Container Model Instantiated.");
      	}
  	});
	return containerModel;
});