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
	var self = this
	var index = 0;
	function nextItem() {
	  self.refreshServiceSections()
	  HomePage.addGrid(services_array[index].image.target)
	  HomePage.addImage(services_array[index].image.target, services_array[index].image.position, services_array[index].image.url)
	  HomePage.addText(services_array[index].text.target, services_array[index].text.position, services_array[index].text.title, services_array[index].text.text)
	  index = (index + 1) % services_array.length;
	  self.highlightButton(services_array[index].text.title.toLowerCase())
	}
	nextItem();
	window.setInterval(nextItem, 10000);
};

ServicesPage.prototype.highlightButton = function(button_id) {
	$('.services_toggle_buttons').css({'backgroundColor':'white'})
	console.log('#' + button_id + '_services_button')
	$('#' + button_id + '_services_button').css({'backgroundColor':'black'})
};

