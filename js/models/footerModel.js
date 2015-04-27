define(function () {
	var footerModel;
	footerModel = Backbone.Model.extend({
		defaults: {
            title: "My Footer"
        },

      	initialize: function(){
          	console.log("Footer Model Instantiated.");
      	}
  	});
	return footerModel;
});