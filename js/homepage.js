function HomePage () {
	
}

HomePage.prototype.homepageVideo = function(url) {
	$('#homepage_video').append('<video autoplay="" loop="" name="media"><source src="' + url + '" type="video/mp4"></video></div>')
};

HomePage.prototype.setupSection = function(id, additional_class) {
	$('#content').append('<div id="' + id + '" class="homepage_section ' + additional_class + '"></div>')
};

HomePage.prototype.addGrid = function(id) {
	$('#' + id).append('<div class="homepage_2_grid" id="' + id + '_left"></div><div class="homepage_2_grid" id="' + id + '_right"</div>')
};

HomePage.prototype.addImage = function(id, position, url) {
	$('#' + id + '_' + position).css({'backgroundImage' : 'url('+ url + ')'})
};

HomePage.prototype.addText = function(id, position, title, copy) {
	$('#' + id + '_' + position).append('<div class="homepage_text_section"><div class="copy_title"><span>' + title + '</span></div><div class="homepage_copy"><span>' + copy + '</span></div></div>')
};