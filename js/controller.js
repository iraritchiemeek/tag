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
		headerMenu.menuItem("TRENDS", "trends.tagtheagency.com")
		headerMenu.menuItem("VIRTUAL REALITY")
		headerMenu.menuItem("INFLUENCES")
		headerMenu.menuItem("CONTACT")
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
			console.log(e.target.id.split('_')[0])
		})
	}

	function clearPage () {
		$('#content').empty()
		clearInterval(servicesPage.services_interval)
	}

	function loadHomePage () {
		clearPage()
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
		homePage.addText('wanna_play_section', 'left', 'Wanna play?', 'What we do - think, create, do, live, love and breathe social media.Sure, we can look after your social channels, post content daily and all of that, but where we thrive is in the innovation and creative games of social media. We push the boundaries, we create campaigns that excite, inspire and entertain.')

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
		homePage.addText('trends_section', 'left', 'Trends', 'The world of social media is fast becoming video based and at TAG we love to create videos designed for the social media space!<br><br>This page brings you the latest trending videos from around the world, automatically pulling the top trending clips from Vine, YouTube and Reddit, we hope you enjoy!')
	}

	function loadServicesPage () {
		clearPage()
		window.location.hash = 'services';
		servicesPage.setupSection('services_carousel')
		servicesPage.servicesButtonsWrapper('services_carousel')
		servicesPage.servicesToggleButton('services_carousel', 'research')
		servicesPage.servicesToggleButton('services_carousel', 'strategy')
		servicesPage.servicesToggleButton('services_carousel', 'campaigns_creative')
		servicesPage.servicesToggleButton('services_carousel', 'videos')
	
		var target = 'services_carousel'

		var research = {text: {
				target: target,
				position: 'right',
				title: 'Research',
				text: 'We watch to see what the competition is doing; researching the competitive playing field that is your marker and equipping you and your team with the information and knowledge you need. If you\'re new to social media or already up and running, knowledge is power, power to win!'
			},
			image: {
				target: target,
				position: 'left',
				url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
			}
		}

		var strategy = {text: {
				target: target,
				position: 'left',
				title: 'Strategy',
				text: 'Developing a plan to win, not just for the first game, but also for future games. No professional game is won without a strong, tested and well thought out strategy. <br/> At TAG we have a diverse team of experts in the social media space, with deep understanding of branding, strategy and how to pull it all together through creative processes and social innovation. Beyond just marketing, we will dive into the depths of your brands culture, inspiring and invigorating your team.'
			},
			image: {
				target: target,
				position: 'right',
				url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
			}
		}

		var videos = {text: {
				target: target,
				position: 'right',
				title: 'Videos',
				text: 'Video and social media go together like marmite and cheese in a school lunch box. Naturally, TAG has the ability to shoot, direct and produce video content for social media channels, weather it\'s on our own in house green screen or somewhere in the field!</br>The only limit is your imagination!'
			},
			image: {
				target: target,
				position: 'left',
				url: 'http://store.storeimages.cdn-apple.com/8726/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/scene0/iphone6s-scene0?wid=400&hei=650&fmt=png-alpha&qlt=95&.v=1441818720383'
			}
		}
		
		servicesPage.autoChangeServices([research, strategy, videos], homePage)
	}

	function loadVirtualRealityPage () {
		clearPage()
		window.location.hash = 'virtual-reality';

		homePage.setupSection('virtual_reality_section', 'homepage_double_grid')
		homePage.addGrid('virtual_reality_section')
		homePage.addImage('virtual_reality_section', 'left', 'http://south.io/wp-content/uploads/2015/12/OculusRift.png')
		homePage.addText('virtual_reality_section', 'right', 'VR Studios', 'Welcome to the VR Studio of TAG the agency. This is a specific division of TAG that has been established to bring marketing and advertising to life through Virtual Reality.</br></br>From Oculus Rift, to 360-degree video, to hologram technology; the VR Studio collaborates with the best and brightest in the industry to provide a complete solution for your brand in this new and innovate space of advertising</br></br>Get in touch today; we\'d love to help bring your brand to life, truly, from virtual to the real world!')
	}



})