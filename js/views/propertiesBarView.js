define(['../.././libs/text.js!../.././templates/propertiesBar.html', '../.././libs/text.js!../.././templates/container.html'], function (propertiesBarTpl, containerTpl) {
	var topBarView;
	topBarView = Backbone.View.extend({
		el: ".propertiesBar",

		templateFileName: "propertiesBarView.html",

		template: propertiesBarTpl,

		initialize: function() {
			// $.get(this.templateFileName, function(data){console.log(data);this.template=data});
			$( "body" ).on( "click", function( event, ui ) {
			  if( window.selected != "" ){
			  	if( $(event.target).hasClass("mainContainer") ){
			  		$("#subContainer").html(containerTpl);
			  		$("#containerText").val( ""+$("#"+window.selected).text() );
			  		$("#containerWidth").val( ""+$("#"+window.selected).css("width") );
			  		$("#containerHeight").val( ""+$("#"+window.selected).css("height") );
			  		$("#containerText").bind("keypress", function(e){
			  			if (e.keyCode == 13) {
			  				//var temp = $("#"+window.selected).children()[0];
			  				$("#"+window.selected).contents()[0].nodeValue = $("#containerText").val();
			  				//$("#"+window.selected).append( temp );
			  			}
			  		});
			  	}
			  }else{
			  	$("#subContainer").html("No Element Selected");
			  }
			});
		},

		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});
	return topBarView;
});