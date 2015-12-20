function HeaderMenu () {
	
}

HeaderMenu.prototype.menuItem = function(itemName, url) {
	$('#header_menu').append('<a href="http://' + url + '">' + itemName + '</a>')
};