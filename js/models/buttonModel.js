define(function () {
	var buttonModel;
	buttonModel = Backbone.Model.extend({
		defaults: {
          title: "My Button"
      },

    	initialize: function(){
        	console.log("Button Model Instantiated.");
    	}
	});
	return buttonModel;
});