define(['../.././libs/text.js!../.././templates/home.html', '.././models/boardModel' , '.././models/containerModel'], function (homeTpl, boardModel, containerModel) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		model: new boardModel(),

		data: document.createElement("span"),

		selectedId: '',

		idCount: 0,

		initialize: function() {
			var self = this;
			this.render();
			window.selected = ""
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
			  		self.idCount = self.idCount+1;
			  		var currentNode = "<div id='id"+self.idCount+"' class='mainContainer'>Enter Text Here!</div>"
			  		$( ".mainBoard" ).append(currentNode);
			  		$( "#id"+self.idCount ).resizable({
					  animate: true,
					  autoHide: false,
					  handles: "se",
					  helper: "resizable-helper",
					  containment: "parent"
					});
					$( "#id"+self.idCount ).draggable({
						containment: ".mainBoard"
					});
					$( "#id"+self.idCount ).bind("mouseenter", function(event, ui){
						if( (self.selectedId == "") || ( self.selectedId != $(event.target).attr('id') ) ){
							$(event.target).css("border-color", "#308911");
						}
					});
					$( "#id"+self.idCount ).bind("mouseleave", function(event, ui){
						if( (self.selectedId == "") || ( self.selectedId != $(event.target).attr('id') ) ){
							$(event.target).css("border-color", "#000000");
						}
					});
					$( "#id"+self.idCount ).bind("click", function(event, ui){
						if( self.selectedId == "" ){
							$(".mainContainer").css("border-color", "#000000");
							$(event.target).css("border-color", "#1F1C9E");
							self.selectedId = $(event.target).attr("id");
							window.selected = $(event.target).attr("id");
						}else if( self.selectedId == $(event.target).attr("id") ){
							self.selectedId = "";
							window.selected = "";
							$(".mainContainer").css("border-color", "#000000");
						}else{
							$(".mainContainer").css("border-color", "#000000");
							$(event.target).css("border-color", "#1F1C9E");
							self.selectedId = $(event.target).attr("id");
							window.selected = $(event.target).attr("id");
						}
					});
			  	}
			  }
			});
		}
	});
	return homeView;
});