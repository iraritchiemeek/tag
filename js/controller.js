$(document).ready(function(){

	var headerMenu = new HeaderMenu()
	headerMenu.menuItem('HOME', 'tagtheagency.com')
	headerMenu.menuItem('SERVICES', 'tagtheagency.com/services/')
	headerMenu.menuItem('TRENDS', 'trends.tagtheagency.com')

	var servicesPage = new ServicesPage()
	servicesPage.setupDivs()
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
	servicesPage.serviceItem('Service Name', 'Short copy about service, Short copy about service, Short copy about service.', 'http://www.catalyst90.com/wp-content/uploads/2015/01/Engage.png')
})