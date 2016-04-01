function VirtualReality() {
	
}

VirtualReality.prototype.append360Photo = function(target, src) {
	$('#' + target).append('<div class="valiantContainer" data-photo-src="' + src + '"></div>')
};