function TicketsPanel(selector) {
	var MIN_TICKETS_AMOUNT = 4,
		MAX_TICKETS_AMOUNT = 16;
	var collections = {
			30: new TicketsCollection30(selector),
			50: new TicketsCollection50(selector),
			75: new TicketsCollection75(selector),
			90: new TicketsCollection90(selector)
		},
		currentCollection = collections[30],
		ticketsRange = [];

	this.refresh = function() {
		var ticketsAmount = getRandomValue(MIN_TICKETS_AMOUNT, MAX_TICKETS_AMOUNT);
		ticketsRange = getRandomRange(0, ticketsAmount, ticketsAmount);
		currentCollection.render(ticketsRange);
	};

	this.setMode = function (mode) {
		currentCollection = collections[mode];
		currentCollection.render(ticketsRange)
	};

	function getRandomValue(min, max) {
		return Math.round(min + (Math.random() * (max - min)));
	}

	function getRandomRange(min, max, amount) {
		var range = Array.apply(null, new Array(max - min)).map(function(item, id) { return id; });
		range.sort(function() {return getRandomValue(-1, 1);});
		return range.slice(0, amount);
	}

	this.refresh();
}