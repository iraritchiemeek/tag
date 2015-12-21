$(document).ready(function(){

	var headerMenu = new HeaderMenu()
	headerMenu.menuItem('HOME', 'tagtheagency.com')
	headerMenu.menuItem('SERVICES', 'tagtheagency.com/services/')
	headerMenu.menuItem('TRENDS', 'trends.tagtheagency.com')

	var servicesPage = new ServicesPage()
	servicesPage.setupDivs()
	servicesPage.serviceItem('Research', 'We investigate and research the social media landscape, gaining intelligence on where your brand currently sits, who the competition is and where your target audience is online. Knowledge is power and fundamental to the success of any good strategy.', '#')
	servicesPage.serviceItem('Strategy', 'Equipped with insights from our reconnaissance we can quickly and efficiently build a social media strategy that aligns with your current business goals and objectives. With an integrated approach, we enhance the reach of your brand\'s key messaging whilst improving the customer service and value to your clients.', '#')
	servicesPage.serviceItem('Creative', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Campaigns', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Consulting Content', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Video', 'Visual media captures attention, imaginations and emotions; connect with your market using video production to tell your brand\'s story. Our creative team produces eye-catching motion graphics, innovative video production (including filming and editing), and engaging voiceovers/scripts. We cover a complete range of video genres from ads, campaigns, product demos, business profiles, case studies, corporate events, music videos and even 15 second Instavids for use on Instagram. There really are no limits to showcasing a brand on film – capture your brand\'s story and make your audience sit up and take notice.', '#')
	servicesPage.serviceItem('Email marketing', 'Using social media campaigns we will help you build an effective and qualified email database. We then work to develop regular email campaigns that target your audience, providing content and sales promotions that resonate. Inspire your audience to further interact with your brand and optimise the email content. And share through social media channels to extend reach further than before!', '#')
	servicesPage.serviceItem('Facebook apps', 'Custom Facebook competition apps are a great way to inspire new fans and reward your existing community! Boost your brand experience within Facebook by separating yourself from the opposition with our custom-built Facebook competition apps. Whether it\'s a simple giveaway or something more complex like a user-submitted photo-upload competition, we are fully equipped to tailor something to suit your needs. Our custom Facebook apps are optimised for all devices – mobile, tablet and desktop.', '#')
	servicesPage.serviceItem('Advertising', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Activations', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Event amplification', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Monitoring', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	servicesPage.serviceItem('Reporting', 'Short copy about service, Short copy about service, Short copy about service.', '#')
	$(".service_button").on('click', function(e) {
		servicesPage.scrollTo(e.currentTarget.id)
	});
})