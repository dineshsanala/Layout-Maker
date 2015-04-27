define(['../.././libs/text.js!../.././templates/home.html', '.././models/boardModel' , '.././models/containerModel'], function (homeTpl, boardModel, containerModel) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		model: new boardModel(),

		data: document.createElement("span"),

		initialize: function() {
			var self = this;
			this.render();
		},

		render: function() {
			var self = this;
			this.template = _.template( this.template );
			$(this.el).html( this.template );
			$( ".mainBoard" ).droppable({
			  accept: ".items",
			  drop: function( event, ui ) {
			  	console.log("Dropped Sucessfully");
			  	console.log( $(ui.draggable).attr("id") );
			  	console.log( self.data );
			  	if( $(ui.draggable).attr("id") == "containerSection" ){
			  		self.model.children.push( new containerModel() );
			  		$( ".mainBoard" ).append("<div class='mainContainer'>Enter Text Here!</div>");
			  		$( ".mainContainer" ).resizable({
					  animate: true,
					  autoHide: false,
					  handles: "n, e, s, w",
					  helper: "resizable-helper",
					  containment: "parent"
					});
					$(".mainContainer").draggable({
						containment: ".mainBoard"
					});
			  	}
			  }
			});
		}
	});
	return homeView;
});