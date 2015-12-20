function ServicesPage () {
	
}

ServicesPage.prototype.setupDivs = function() {
	$('#content').append('<div id="services_buttons"></div>')
	$('#content').append('<div id="services_info"></div>')
};

ServicesPage.prototype.serviceItem = function(serviceName, imageUrl) {
	$('#services_buttons').append('<div style="background-image: url(' + imageUrl + ')" class="service_button" id="' + serviceName + '_button"><h1>' + serviceName + '</h1></div>')
};