function ServicesPage () {
	
}

ServicesPage.prototype.setupDivs = function() {
	$('#content').append('<div id="services_buttons"></div>')
	$('#content').append('<div id="services_info"></div>')
};

ServicesPage.prototype.serviceItem = function(serviceName, serviceInfo, imageUrl) {
	this.serviceButton(serviceName, imageUrl)
	this.serviceSection(serviceName, serviceInfo, imageUrl)
};

ServicesPage.prototype.serviceButton = function(serviceName, imageUrl) {
	$('#services_buttons').append('<div style="background-image: url(' + imageUrl + ')" class="service_button" id="' + serviceName + '_button"><h1>' + serviceName + '</h1></div>')
};

ServicesPage.prototype.serviceSection = function(serviceName, serviceInfo, imageUrl) {
	$('#services_info').append('<div style="background-image: url(' + imageUrl + ')" class="service_section" id="' + serviceName + '_section"><h1>' + serviceName + '</h1><p>' + serviceInfo + '</p></div>')
};