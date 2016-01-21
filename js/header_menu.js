function HeaderMenu () {
	
}

HeaderMenu.prototype.menuItem = function(itemName, url) {
	$('#header_menu').append('<a id="' + itemName + '_menu_item" href="http://' + url + '">' + itemName + '</a>')
};