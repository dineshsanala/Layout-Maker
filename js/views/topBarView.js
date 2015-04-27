define(['../.././libs/text.js!../.././templates/topBar.html', '.././models/textModel'], function (topBarTpl, TextModel) {
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
			$(".subToolBar").hide();
		    $( ".items" ).draggable({
		    	revert:true,
		    	start: function( event, ui ) {
		    		var element = event.target;
		    		$(element).css({
		    			"color":"#665544"
		    		});
		    	},
		    	stop: function( event, ui ) {
		    		var element = event.target;
		    		$(element).css({
		    			"color":"white"
		    		});
		    		var textModelElement = new TextModel("New Text!");
		    	}
		    });
		},

		events: {
			'click .topMenu' : 'subToolbarOpen'
		},

		subToolbarOpen: function(event, ui){
			$(".subToolBar").show();
			$(".topMenu").css("background-color","#E86A51");
			if( (event.target.id == "elementsBtn") || (event.target.parentElement.id == "elementsBtn") ){
				$("#elementsBtn").css("background-color","#302f31");
				$(".elementsSub").show();
				$(".sectionsSub").hide();
			}else if( (event.target.id == "sectionsBtn") || (event.target.parentElement.id == "sectionsBtn") ){
				$("#sectionsBtn").css("background-color","#302f31");
				$(".elementsSub").hide();
				$(".sectionsSub").show();
			}
		}
	});
	return topBarView;
});