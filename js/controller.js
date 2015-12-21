$(document).ready(function(){

	var headerMenu = new HeaderMenu()
	headerMenu.menuItem('HOME', 'tagtheagency.com')
	headerMenu.menuItem('SERVICES', 'tagtheagency.com/services/')
	headerMenu.menuItem('TRENDS', 'trends.tagtheagency.com')

	var servicesPage = new ServicesPage()
	servicesPage.setupDivs()
	servicesPage.serviceItem('Research', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Strategy', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Creative', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Campaigns', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Consulting Content', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Video', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Email marketing', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Facebook apps', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Advertising', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Activations', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Event amplification', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Monitoring', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Reporting', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	$(".service_button").on('click', function(e) {
		servicesPage.scrollTo(e.currentTarget.id)
	});
})