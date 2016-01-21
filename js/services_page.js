function ServicesPage () {
	
}

ServicesPage.prototype.setupSection = function(id, additional_class) {
	$('#content').append('<div id="' + id + '" class="services_section ' + additional_class + '"></div>')
};