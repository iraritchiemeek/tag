$(document).ready(function(){

	var headerMenu = new HeaderMenu()
	headerMenu.menuItem('HOME', 'tagtheagency.com')
	headerMenu.menuItem('SERVICES', 'tagtheagency.com/services/')
	headerMenu.menuItem('TRENDS', 'trends.tagtheagency.com')

	var servicesPage = new ServicesPage()
	servicesPage.setupDivs()
	servicesPage.serviceItem('Service Name1', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name2', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name3', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name4', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name5', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name6', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name7', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name8', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name9', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name10', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name11', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name12', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name13', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Service Name14', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Social Media', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	$(".service_button").on('click', function(e) {
		console.log(e.currentTarget.id)
		servicesPage.scrollTo(e.currentTarget.id)
	});
})