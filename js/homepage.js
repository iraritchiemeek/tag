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
	$('#' + id + '_' + position).append('<div class="homepage_text_section"><div class="copy_title">' + title + '</div><div class="homepage_copy">' + copy + '</div></div>')
};

HomePage.prototype.thinkDoReviewAccordian = function(title, position) {
	$('#think_do_review_section_' + position).append('<div id="TDR_accordian"><div id="TDR_title">' + title + '</div><div class="TDR_toggle" id="think_toggle">Think</div><div class="TDR_toggle active_TDR" id="do_toggle">Do</div><div class="TDR_toggle" id="review_toggle">Review</div></div>')
};

HomePage.prototype.addThinkDoReviewCopy = function(title, copy) {
	$('#TDR_accordian').append('<div class="TDR_section" id="' + title + '_section">' + copy + '</div>')
};

HomePage.prototype.displayThinkDoReviewSection = function(section) {
	$('.TDR_section').hide()
	$('#' + section + '_section').show()
};