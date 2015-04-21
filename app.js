require(['js/views/homeView', 'js/views/headerView'], function (HomeView, HeaderView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"" : "home"
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
		},
		home: function() {
			this.homeView = new HomeView();
		}
	});
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


