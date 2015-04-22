define(['../.././libs/text.js!../.././templates/topBar.html'], function (topBarTpl) {
	var topBarView;
	topBarView = Backbone.View.extend({
		el: "#topBar",

		templateFileName: "topBar.html",

		template: topBarTpl,

		initialize: function() {
			// $.get(this.templateFileName, function(data){console.log(data);this.template=data});		
		},

		render: function() {
			$(this.el).html(_.template(this.template));
		},

		events: {
			'click .topMenu' : 'subToolbarOpen'
		},

		subToolbarOpen: function(event, ui){
			console.log(event);
		}
	});
	return topBarView;
});