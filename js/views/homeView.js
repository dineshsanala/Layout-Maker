define(['../.././libs/text.js!../.././templates/home.html'], function (homeTpl) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		initialize: function() {
			var self = this;
			this.render();
		},

		render: function() {
			var self = this;
			this.template = _.template( this.template );
			$(this.el).html( this.template );
		}
	});
	return homeView;
});