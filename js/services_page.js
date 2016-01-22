function ServicesPage () {
	
}

ServicesPage.prototype.setupSection = function(id) {
	$('#content').append('<div id="' + id + '" class="services_section"></div>')
};

ServicesPage.prototype.servicesButtonsWrapper = function(target) {
	$('#' + target).append('<div id="services_buttons_wrapper"></div>')
};

ServicesPage.prototype.servicesToggleButton = function(target, id) {
	console.log($('#' + target))
	$('#services_buttons_wrapper').append('<div id="' + id + '_services_button" class="services_toggle_buttons"></div>')
};