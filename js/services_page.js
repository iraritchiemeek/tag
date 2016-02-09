function ServicesPage (homePage) {

	this.homePage = homePage
	this.targetDiv = 'services_carousel'

	var research = {text: {
			position: 'right',
			title: 'Research',
			text: 'We watch to see what the competition is doing; researching the competitive playing field that is your marker and equipping you and your team with the information and knowledge you need. If you\'re new to social media or already up and running, knowledge is power, power to win!'
		},
		image: {
			position: 'left',
			url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
		}
	}

	var strategy = {text: {
			position: 'left',
			title: 'Strategy',
			text: 'Developing a plan to win, not just for the first game, but also for future games. No professional game is won without a strong, tested and well thought out strategy. <br/> At TAG we have a diverse team of experts in the social media space, with deep understanding of branding, strategy and how to pull it all together through creative processes and social innovation. Beyond just marketing, we will dive into the depths of your brands culture, inspiring and invigorating your team.'
		},
		image: {
			position: 'right',
			url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
		}
	}

	var videos = {text: {
			position: 'right',
			title: 'Videos',
			text: 'Video and social media go together like marmite and cheese in a school lunch box. Naturally, TAG has the ability to shoot, direct and produce video content for social media channels, weather it\'s on our own in house green screen or somewhere in the field!</br>The only limit is your imagination!'
		},
		image: {
			position: 'left',
			url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
		}
	}

	this.services = {
		research: research,
		strategy: strategy,
		videos: videos
	}

	this.timeOut = 0
}

ServicesPage.prototype.setupSection = function(id) {
	$('#content').append('<div id="' + id + '" class="services_section"></div>')
};

ServicesPage.prototype.servicesButtonsWrapper = function(targetDiv) {
	$('#' + targetDiv).append('<div id="services_buttons_wrapper"></div>')
};

ServicesPage.prototype.servicesToggleButton = function(targetDiv, id) {
	$('#services_buttons_wrapper').append('<div id="' + id + '_services_button" class="services_toggle_buttons"></div>')
};

ServicesPage.prototype.refreshServiceSections = function() {
	$('.left_section, .right_section').remove()
	this.homePage.addGrid(this.targetDiv)
};

ServicesPage.prototype.autoChangeServices = function(services_array) {
	var self = this
	var index = 0
	this.delayTime = 0

	testing()
	function testing() {
		$.each(self.services, function(key, value) {
			setTimeout( function(){ 
				if (window.location.hash === '#services') {
					self.refreshServiceSections()
					self.loadSlide(value)
					index = (index + 1) % services_array.length;
				} else {
					return
				}
			}, self.delayTime)
				self.delayTime += 8000;
		})
	}
	setTimeout(testing, 0)
};

ServicesPage.prototype.loadSlide = function(slide) {
	this.highlightButton(slide.text.title.toLowerCase())
	this.homePage.addImage(this.targetDiv, slide.image.position, slide.image.url)
	this.homePage.addText(this.targetDiv, slide.text.position, slide.text.title, slide.text.text)
};

ServicesPage.prototype.highlightButton = function(button_id) {
	$('.services_toggle_buttons').css({'backgroundColor':'white'})
	console.log('#' + button_id + '_services_button')
	$('#' + button_id + '_services_button').css({'backgroundColor':'black'})
};

ServicesPage.prototype.changeSlide = function(button_id) {
	this.refreshServiceSections()
	this.loadSlide(this.services[button_id])
	this.delayTime += 8000
};