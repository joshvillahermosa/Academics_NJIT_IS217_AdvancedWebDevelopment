/*
*Based on apps.js from backbone-slideshow from: davemo
*GitHub: https://github.com/davemo/backbone-slideshow
*
*
*/
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};

APP = {
	Views: {},
	Models: {},
	Collections: {}
};

APP.Modules.Slide = Backbone.Model.extend({
	defaults:{
		id: 1,
		headline: 'Slideshow App',
		caption: 'Caption displayed here',
		layout: 'right'
	}

	show: function(){
		this.getEl().show();
	},

	getEl: function(){
		return $('#slide-'+this.id);
	},

	getControl: function(){
		return $('.jump-to').ep(this.id - 1);
	}
});

//Collection that holds the Slideshow
APP.Collections.Slides = Backbone.Collection.extend({
	model: APP.Models.Slide
});