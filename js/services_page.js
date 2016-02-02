function ServicesPage () {
}

ServicesPage.prototype.setupSection = function(id) {
	$('#content').append('<div id="' + id + '" class="services_section"></div>')
};

ServicesPage.prototype.servicesButtonsWrapper = function(target) {
	$('#' + target).append('<div id="services_buttons_wrapper"></div>')
};

ServicesPage.prototype.servicesToggleButton = function(target, id) {
	$('#services_buttons_wrapper').append('<div id="' + id + '_services_button" class="services_toggle_buttons"></div>')
};

ServicesPage.prototype.refreshServiceSections = function() {
	$('.left_section, .right_section').remove()
};

ServicesPage.prototype.autoChangeServices = function(services_array, HomePage) {
	var index = -1
	var self = this
	this.services_interval = window.setInterval(function(){
		var max_index = services_array.length
		if (index >= max_index - 1) {
			index = 0
		} else {
			index ++
		}
		for (var i = services_array[index].length - 1; i >= 0; i--) {
			console.log(i[index])
			var target = services_array[index][0]
			var text_position = services_array[index][1]
			var title = services_array[index][2]
			var text = services_array[index][3]
			var image_position = services_array[index][4]
			var image = services_array[index][5]
			self.refreshServiceSections()
			HomePage.addGrid(target)
			HomePage.addImage(target, image_position, image)
			HomePage.addText(target, text_position, title, text)

		};
	}, 2000)
};