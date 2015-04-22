require(['js/views/homeView', 'js/views/topBarView'], function (HomeView, TopBarView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"" : "home"
		},
		initialize: function() {
			this.topBarView = new TopBarView();
			this.topBarView.render();
		},
		home: function() {
			this.homeView = new HomeView();
		}
	});
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


