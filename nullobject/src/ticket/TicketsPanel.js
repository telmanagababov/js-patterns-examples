function TicketsPanel(selector) {
	var collection = new TicketsCollection(),
		container = new TicketsContainer(selector);

	this.addTickets = function(amount) {
		var tickets = collection.add(amount);
		container.render(tickets);
	};

	this.buyTickets = function(amount) {
		var tickets = collection.remove(amount);
		container.remove(tickets);
		console.log("buyTickets:", tickets);
	};
}