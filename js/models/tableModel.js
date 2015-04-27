define(function () {
	var tableModel;
	tableModel = Backbone.Model.extend({
		defaults: {
            title: "My Table"
        },

      	initialize: function(){
          	console.log("Table Model Instantiated.");
      	}
  	});
	return tableModel;
});