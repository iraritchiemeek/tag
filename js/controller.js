$(document).ready(function(){

	var homePage = new HomePage()
	var servicesPage = new ServicesPage()

	loadPageConstants()
	loadHomepage()

	function loadPageConstants () {
		var headerMenu = new HeaderMenu()
		headerMenu.menuItem("HOME", "tagtheagency.com")
		headerMenu.menuItem("SERVICES", "tagtheagency.com/services/")
		headerMenu.menuItem("TRENDS", "trends.tagtheagency.com")
	}

	function loadHomepage () {
		var url = 'vids/tag_30s.mp4'
		homePage.setupSection('homepage_video')
		homePage.setupSection('tag_copy_section', 'homepage_double_grid')
		homePage.homepageVideo(url)

		homePage.addGrid('tag_copy_section')
		homePage.addImage('tag_copy_section', 'left', 'imgs/white_duck.gif')
		homePage.addText('tag_copy_section', 'right', 'TAG - you\'re it!', 'We are a team of specialists in the game of social media. From #tags to brand tags, we play fair and we play to win. We\'re the kids you choose first to be on your team in the playground.')

	}

	function loadServicesPage () {
		servicesPage.setupDivs()
		servicesPage.serviceItem("Research", "Competitive analysis, target audience profiling, we watch to see what the competition is doing, researching the competitive playing field that is your marker, equipping you and your team with the information and knowledge you need. New to social or already up and running, knowledge is power, power to win!", "#")
		servicesPage.serviceItem("Strategy", "Developing a plan to win, not just for the first game, but also for the future games. No professional game is won with out a strong, tested and well thought through strategy! At TAG we have a diverse team of experts in the Social Media space, with deep understanding of branding, strategy and how to pull it all together through creative.</br></br>If you want to win, then you need to have us on your team!", "#")
		servicesPage.serviceItem("Campaigns and Creative", "Ideas that connect with your strategy, ideas brought to life though social media, ideas that are designed to be amplified, talked about and shared.</br></br>Flowing from the creative idea we work to develop campaigns that are specific to the key social networks for your audience, from Facebook to Snapchat, we create engaging and dynamic campaigns to help you win!", "#")
		servicesPage.serviceItem("Corporate Consulting", "One of our specialists can work with your senior team to bring your company to life though social innovation, beyond just marketing, diving into the depths of your brands culture, inspiring and invigorating your team.", "#")
		servicesPage.serviceItem("Strategic Content", "TAG can help develop specific content that resonates with your audience for key events, specific promotions, delicate announcements or creating meme's to drive content engagement and entertain your audience!", "#")
		servicesPage.serviceItem("Content Production", "This is best done from within a brand, however sometimes there is situations where you need help, advice or training. At TAG we can help your team develop content for your social channels, we can work alongside your team through to producing content for you, whatever your need we have a specialist ready and waiting.", "#")
		servicesPage.serviceItem("Video Production", "Video and social media go together like marmite and cheese in a school lunch box. Naturally TAG has the ability to shoot, direct, produce video content for social media channels, the only limit is your imagination!", "#")
		servicesPage.serviceItem("Email Marketing", "You bet we do! Email marketing is still the most effective sales tool in the digital game. With every social campaign an opportunity to grow your email database TAG has the tools and experience to help turn these list into a valuable sales channel for your brand!", "#")
		servicesPage.serviceItem("Facebook Apps", "Custom Facebook apps are a great way to inspire new fans, reward your existing community or bring together your other social networks. Boosting your brand game within Facebook. Whether it's a simple giveaway, a YouTube app or something more complex like a user-submitted photo-upload competition, we have our own technology and platform to tailor something to suit your specific needs and goals. All or Facebook apps are optimised for all devices – mobile, tablet and desktop.", "#")
		servicesPage.serviceItem("Social Media Audits", "Already kicking ass on social media? TAG can provide you with an audit to help improve your existing social media execution, benchmarking your team performance, then helping them to elevate their level of game play!", "#")
		servicesPage.serviceItem("Social Media Advertising", "Advertising on social media channels can put the right content in front of the right people at the right time. TAG provides a full service from ad planning and placement though to creating content designed for advertising.", "#")
		servicesPage.serviceItem("Activations", "One of the most fun parts of the job, the TAG team loves nothing more than taking a brand into the ‘real' world, combining the integration of social media and technology in the daily lives of consumers, leveraging it to inspire them to interact in a meaningful, real and honest way. Nothing beats content published and shared by a community, that's amplification, that's true social media.", "#")
		servicesPage.serviceItem("Event Amplification", "The TAG team can help amplify your events, extend them beyond the walls of the event, pushing key content and experiences out into the world. The TAG team can live promote your event though social channels, working to have them trending your messages. From tweeting, on site video production through to live streaming through periscope, the TAG team has it covered.", "#")
		servicesPage.serviceItem("Engagement points", "Inspire people to share your content doesn't just stay online! The team at TAG can work with you to develop unique engagement points within your physical and digital environments to inspire people to share your content, to inspire people to help you play the social game to win!", "#")
		servicesPage.contact()
		$(".service_button").on("click", function(e) {
			servicesPage.scrollTo(e.currentTarget.id)
		});
	}



})