/*
*IS217_Project_01
*Flickr Singleton
*
*Based on apps.js from backbone-slideshow from: davemo
*GitHub: https://github.com/davemo/backbone-slideshow
*
*By studing the following code, this determines the slideshow functions
*that is used.
*
*/

(function(_, Backbone)){
	APP.Views.slideShow = Backbone.View.extend({

		//creates model
		el: '#slideshow',
		slides: '#slidesshow .slides',
		controls: '#slidesshow .controls',
		playPauseControl: '#slidesshow .controls .toggle-play-pause',

		//Creates timer for slides
		delay: 10000,
		currentIndex: 0,

		events: {
			'click .toggler': 'toggleVisibility',
			'click .toggle-play-pause': 'togglePlayPause',
			'click .jump-to': 'jumpTo'
		},

		slideTemplate: _.template($("#slide-template").html()),
		controlTemplate: _templates($("#controls-template").hmtl()),

		initialize: function (){
			_.bindAll(this);
		},

		render: function(){
			var self = this;
			this.collection.each(function(slide, i){
				$(self.slides).append(self.slideTemplate(slide.toJSON()));
				$(self.controls).append(self.controlTemplate({
					index: i,
					human_readable_index: ++i
				}));
			});
			this.start();
			return this;
		},
		rotateSlides: function(){
			var current = this.currentIndex;
			var next = this.currentIndex === (this.collection.length - 1) ? 0 : this.currentIndex + 1;
			this.transition(current, next);
		},
		transition: function(from, to){
			var current = this.collection.at(from);
			var next = this.collection.at(to);
			current.getEl().fadeOut('slow', function(){
				next.getEl().fadeIn('slow');
			});
			current.getControl().toggleClass('current');
			next.getControl().toggle('current');
			this.currenIndex = to;
		},

		toggleVisibility: function (){
			var slides = $(this.slides);
			slides.toggle();
			$(this.el).toggleClass('collapsed');
			if(slides.is(":visible")){
				this.play();
			} else {
				this.pause();
			}
		},

		togglePlayPause: function(){
			if( this.isPlaying()){
				this.pause();
			} else {
				this.play();
			}
		},

		start: function(){
			this.collection.at(0).show();
			this.collection.at(0).getControl().toggleClass('current');
			this.play();
		},
		pause: function(){
			if(this.isPaused()){
				return;
			}
			this.state = 'paused';
			clearInterval(this.intervalID);
			$(this.playPauseControl).toggleClass('playing', false);
		},

		play: function(){
			if(this.isPlaying()){
				return;
			}
			this.state = 'playing';
			this.intervalID = setInterval(this.rotateSlides, this.delay);
			$(this.playPauseControl).toggleClass('playing', true);
		},

		jumpTo: function(e) {
			var next = $(e.currentTarget).data('index');
			this.pause();
			this.transition(this.currentIndex, next);
		},

		isPlaying: function(){
			return this.state === 'playing';
		}

		isPaused: function(){
			return !this.isPlaying();
		}
	});
})(this._, this.Backbone);