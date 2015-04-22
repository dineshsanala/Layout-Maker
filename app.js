require(['js/views/homeView', 'js/views/topBarView', 'js/views/propertiesBarView'], function (HomeView, TopBarView, PropertiesBarView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"" : "home"
		},
		initialize: function() {
			this.topBarView = new TopBarView();
			this.topBarView.render();
			this.propertiesBarView = new PropertiesBarView();
			this.propertiesBarView.render();
		},
		home: function() {
			this.homeView = new HomeView();
		}
	});
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


