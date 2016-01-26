function HeaderMenu () {
	
}

HeaderMenu.prototype.menuItem = function(itemName, url) {
	$('#header_menu').append('<a id="' + itemName.replace(/\s+/g, '_').toLowerCase() + '_menu_item" href="http://' + url + '">' + itemName + '</a>')
};