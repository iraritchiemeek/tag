function HomePage () {
	
}

HomePage.prototype.homepageVideo = function(url) {
	$('#homepage_video').append('<video autoplay="" loop="" name="media"><source src="' + url + '" type="video/mp4"></video></div>')
};

HomePage.prototype.setupSection = function(id, additional_class) {
	$('#content').append('<div id="' + id + '" class="homepage_section ' + additional_class + '"></div>')
};

HomePage.prototype.setupGrid = function(id) {
	console.log(id)
	$('#' + id).append('<div class="homepage_2_grid" id="left_grid"></div><div class="homepage_2_grid" id="right_grid"</div>')
};