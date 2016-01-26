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
	// $('.left_section, .right_section').css({'backgroundImage':'none'})
};

ServicesPage.prototype.autoChangeServices = function(nested_services_array, HomePage) {
	var index = -1
	var self = this
	this.services_interval = window.setInterval(function(){
		var max_index = nested_services_array.length
		if (index >= max_index - 1) {
			index = 0
		} else {
			index ++
		}
		for (var i = nested_services_array[index].length - 1; i >= 0; i--) {
			var target = nested_services_array[index][0][0]
			var image_position = nested_services_array[index][1][1]
			var text_position = nested_services_array[index][0][1]
			var image = nested_services_array[index][1][2]
			var title = nested_services_array[index][0][2]
			var text = nested_services_array[index][0][3]
			self.refreshServiceSections()
			HomePage.addGrid(target)
			HomePage.addImage(target, image_position, image)
			HomePage.addText(target, text_position, title, text)

		};
	}, 2000)
};