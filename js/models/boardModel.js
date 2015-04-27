define(function () {
	var boardModel;
	boardModel = Backbone.Model.extend({
		defaults: {
            title: "My Board"
        },

      	initialize: function(){
          	console.log("Board Model Instantiated.");
      	},

        children: []
  	});
	return boardModel;
});