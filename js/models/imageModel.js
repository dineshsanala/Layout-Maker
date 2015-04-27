define(function () {
	var imageModel;
	imageModel = Backbone.Model.extend({
		defaults: {
            title: "My Image",
            src: ""
        },

      	initialize: function(){
          	console.log("Image Model Instantiated.");
      	}
  	});
	return imageModel;
});