var youtube_player

function randomBetween (lowest, highest) {
	return Math.floor((Math.random() * highest) + lowest)
}

function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}