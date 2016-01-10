function Homepage () {
	
}

Homepage.prototype.setupSection = function(id) {
	$('#content').append('<div id="' + id + '" class="homepage_section"></div>')
};