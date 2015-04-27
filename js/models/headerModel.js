define(function () {
	var headerModel;
	headerModel = Backbone.Model.extend({
		defaults: {
            title: "My Header"
        },

      	initialize: function(){
          	console.log("Header Model Instantiated.");
      	}
  	});
	return headerModel;
});