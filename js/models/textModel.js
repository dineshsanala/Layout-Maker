define(function () {
	var textModel;
	textModel = Backbone.Model.extend({
		defaults: {
            title: "My Text"
        },

      	initialize: function(){
          	console.log("Text Model Instantiated.");
      	}
  	});
	return textModel;
});