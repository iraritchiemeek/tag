$(document).ready(function(){

	var homePage = new HomePage()
	var servicesPage = new ServicesPage(homePage)

	loadPageConstants()
	eventListeners()
	checkPageHash()

	function checkPageHash () {
		var page = window.location.hash
		if (page === '#services') {
			loadServicesPage()
		} else if (page === '#virtual-reality') {
			loadVirtualRealityPage()
		} else {
			loadHomePage()
		}
	}

	function loadPageConstants () {
		var headerMenu = new HeaderMenu()
		headerMenu.menuItem("HOME", "tagtheagency.com")
		headerMenu.menuItem("SERVICES")
		headerMenu.menuItem("TRENDS", "http://www.trends.tagtheagency.com")
		headerMenu.menuItem("VIRTUAL REALITY")
		// headerMenu.menuItem("INFLUENCES")
		headerMenu.menuItem("CONTACT", "mailto:hello@tagtheagency.com")
	}

	function eventListeners () {
		$('#services_menu_item').on('click', function(e) {
			e.preventDefault()
			loadServicesPage()
		})

		$('#home_menu_item').on('click', function(e) {
			e.preventDefault()
			loadHomePage()
		})

		$('#virtual_reality_menu_item').on('click', function(e) {
			e.preventDefault()
			loadVirtualRealityPage()
		})

		$('#container').on('click', '.services_toggle_buttons' , function(e) {
			servicesPage.changeSlide(e.target.id.split('_services_button')[0])
		})

		$('#container').on('click', '.services_video_button', function (e) {
			console.log(e.currentTarget.dataset.video_id)
			servicesPage.showVideoPopout()
		})

		$('#container').on('click', '#video_player_close', function () {
			servicesPage.hideVideoPopout()
		})

	}

	function loadHomePage () {
		$('#content').empty()
		window.location.hash = '';

		homePage.setupSection('homepage_video')
		homePage.setupSection('tag_copy_section', 'homepage_double_grid')
		homePage.setupSection('wanna_play_section', 'homepage_double_grid')
		homePage.setupSection('our_approach_section', 'homepage_double_grid')
		homePage.setupSection('think_do_review_section', 'homepage_double_grid')
		homePage.setupSection('team_section', 'homepage_double_grid')
		homePage.setupSection('trends_section', 'homepage_double_grid')

		var url = 'vids/tag_30s.mp4'
		homePage.homepageVideo(url)

		homePage.addGrid('tag_copy_section')
		homePage.addImage('tag_copy_section', 'left', 'imgs/white_duck.gif')
		homePage.addText('tag_copy_section', 'right', 'TAG - you\'re it!', 'We are a team of specialists in the game of social media. From #tags to brand tags, we play fair and we play to win. We\'re the kids you choose first to be on your team in the playground.')

		homePage.addGrid('wanna_play_section')
		homePage.addImage('wanna_play_section', 'right', 'imgs/yellow_table.gif')
		homePage.addText('wanna_play_section', 'left', 'Wanna play?', 'What we do - think, create, do, live, love and breathe social media. Sure, we can look after your social channels, post content daily and all of that, but where we thrive is in the innovation and creative games of social media. We push the boundaries, we create campaigns that excite, inspire and entertain.')

		homePage.addGrid('our_approach_section')
		homePage.addImage('our_approach_section', 'left', 'imgs/white_motorbike.gif')
		homePage.addText('our_approach_section', 'right', 'Our Approach', 'We don\'t automate, we activate! The social media world is a space that thrives on engagement and not automation; it\'s alive with content that connects people to brands, that moves people to take action, like, share and comment.')

		homePage.addGrid('think_do_review_section')
		homePage.addImage('think_do_review_section', 'right', 'imgs/yellow_boxing.gif')
		homePage.thinkDoReviewAccordian('How we do what we do', 'left')
		homePage.addThinkDoReviewCopy('think', 'Research, planning and strategy development. Before you start the game you need to know who you\'re up against; their common plays, set moves - then build a strategy to beat them at their own game.')
		homePage.addThinkDoReviewCopy('do', 'Strategy in social media is important, however it is important that the strategy can be flexible and dynamic. With a team of experts helping you to execute your game plan, we will work with you to develop engaging, creative content that works, is sustainable and is designed with your strategic goals in mind.')
		homePage.addThinkDoReviewCopy('review', 'After every game there are ways to improve. Faster, stronger, better. At TAG we review everything, constantly looking at ways to improve on what we do and how we do it.')
		homePage.displayThinkDoReviewSection('review')
		homePage.autoChangeTDR()
		$('.TDR_toggle').on('click', function(e) {
			homePage.displayThinkDoReviewSection($(e.target)[0].innerHTML.toLowerCase())			
		})

		homePage.addGrid('team_section')
		homePage.addImage('team_section', 'left', 'imgs/team.png')
		homePage.addText('team_section', 'right', 'The Team', 'The team at TAG is made up of a unique combination of talented individuals, each bringing depth and experience to the social media industry.')

		homePage.addGrid('trends_section')
		homePage.addImage('trends_section', 'right', 'imgs/yellow_carousel.gif')
		homePage.addText('trends_section', 'left', 'Trends', 'The world of social media is fast becoming video based and at TAG we love to create videos designed for the social media space!<br><br>This page brings you the latest trending videos from around the world, automatically pulling the top trending clips from Vine, YouTube and Reddit. We hope you enjoy!')
	}

	function loadServicesPage () {
		$('#content').empty()
		window.location.hash = 'services';
		servicesPage.setupSection('services_carousel')
		homePage.setupSection('mountaindew_section', 'homepage_double_grid')
		homePage.setupSection('ux_section', 'homepage_double_grid')
		homePage.setupSection('trustpower_section', 'homepage_double_grid')
		homePage.setupSection('pepsi_section', 'homepage_double_grid')
		servicesPage.videoPlayer()


		servicesPage.servicesButtonsWrapper('services_carousel')
		servicesPage.servicesToggleButton('services_carousel', 'research')
		servicesPage.servicesToggleButton('services_carousel', 'strategy')
		servicesPage.servicesToggleButton('services_carousel', 'videos')
		servicesPage.servicesToggleButton('services_carousel', 'campaigns_and_creative')
	
		servicesPage.autoChangeServices()

		homePage.addGrid('ux_section')
		homePage.addImage('ux_section', 'right', 'http://www.uxnewzealand.com/img/uxnz-logo.png')
		homePage.addText('ux_section', 'left', 'UX New Zealand', 'At the end of 2015 we had the privilege of working with the team at UX New Zealand at their annual conference. It was an amazing two-day event, which shared and showcased the best of usability from New Zealand and around the world. Our task was to create content for their social channels during and beyond the event. If UX is your thing, then this event is not to be missed! www.uxnewzealand.com')
		servicesPage.videoButton('ux_section', 'left', 'OsltYGFoZp4')

		homePage.addGrid('pepsi_section')
		homePage.addImage('pepsi_section', 'left', 'http://icons.iconarchive.com/icons/michael/coke-pepsi/512/Pepsi-Can-icon.png')
		homePage.addText('pepsi_section', 'right', 'Pepsi New Zealand', 'In conjunction with Pepsi and the team at Brand Spanking, we brought the future back to Wellington. To celebrate the 21st of October 2015, Pepsi New Zealand screened Back to the Future 2. On the 21st of October 2015, the very same date the DeLorean traveled forward in time to!')
		servicesPage.videoButton('pepsi_section', 'right', 'OsltYGFoZp4')
		
		homePage.addGrid('trustpower_section')
		homePage.addImage('trustpower_section', 'right', 'imgs/trustpower.jpg')
		homePage.addText('trustpower_section', 'left', 'Trust Power', 'Trustpower approached us early in 2015 to create a campaign with the objective to acquire an owned database that they could contact in future, ultimately generating reach and brand awareness.</br>We built them a mobile friendly Facebook app and directed users to the page through targeted Facebook advertising.</br></br>Through a mixture of boosted Facebook page posts and Facebook ads that directed users straight to the app, we reached over 860,000 people within the target demographic.')

		homePage.addGrid('mountaindew_section')
		homePage.addImage('mountaindew_section', 'left', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mountain_Dew_logo.svg/2000px-Mountain_Dew_logo.svg.png')
		homePage.addText('mountaindew_section', 'right', 'Mountain Dew', 'TAG built a Facebook app, which was designed to engage with fans and inspire them to share the action sports they love. The app gave participants the chance to win a GoPro Hero 4 with a clever little lid that fits on your Mountain Dew bottle and doubles as a mount for your GoPro.')


	}

	function loadVirtualRealityPage () {
		$('#content').empty()
		window.location.hash = 'virtual-reality';

		homePage.setupSection('virtual_reality_section', 'homepage_double_grid')
		homePage.addGrid('virtual_reality_section')
		homePage.addImage('virtual_reality_section', 'left', 'http://south.io/wp-content/uploads/2015/12/OculusRift.png')
		homePage.addText('virtual_reality_section', 'right', 'VR Studios', 'Welcome to the VR Studio of TAG the agency. This is a specific division of TAG that has been established to bring marketing and advertising to life through Virtual Reality.</br></br>From Oculus Rift, to 360-degree video, to hologram technology; the VR Studio collaborates with the best and brightest in the industry to provide a complete solution for your brand in this new and innovative space of advertising</br></br>Get in touch today; we\'d love to help bring your brand to life, truly, from virtual to the real world!')
	}



})