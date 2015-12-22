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
	$('#services_buttons').append('<div style="background-image: url(' + imageUrl + ')" class="service_button" id="' + serviceName.split(' ').join('_') + '"><h1>' + serviceName + '</h1></div>')
};

ServicesPage.prototype.serviceSection = function(serviceName, serviceInfo, imageUrl) {
	$('#services_info').append('<div style="background-image: url(' + imageUrl + ')" class="service_section" id="' + serviceName.split(' ').join('_') + '_section"><h1>' + serviceName + '</h1><p>' + serviceInfo + '</p></div>')
};

ServicesPage.prototype.scrollTo = function(id) {
	$.scrollTo($('#'+ id + '_section')[0], {duration: '1000', offset: -100})
};

ServicesPage.prototype.contact = function() {
	$('#services_buttons').append('<div id="contact_button"><a href="mailto:someone@example.com?Subject=Get%20in%20Touch">Contact</a></div>')
};