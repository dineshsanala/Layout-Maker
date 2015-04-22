define(['../.././libs/text.js!../.././templates/propertiesBar.html'], function (propertiesBarTpl) {
	var topBarView;
	topBarView = Backbone.View.extend({
		el: ".propertiesBar",

		templateFileName: "propertiesBarView.html",

		template: propertiesBarTpl,

		initialize: function() {
			// $.get(this.templateFileName, function(data){console.log(data);this.template=data});
			
		},

		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});
	return topBarView;
});