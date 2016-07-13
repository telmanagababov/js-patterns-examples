function TicketsPanel(selector) {
	var container = new TicketsContainer(selector),
		tickets = [],
		openedTickets = 0,
		selectedTickets = 0;

	this.openTickets = function(amount) {
		openedTickets = amount;
		this._update();
	};

	this.selectTickets = function(amount) {
		selectedTickets = amount;
		this._update();
	};

	this._update = function () {
		var i = 0;
		tickets = [];
		for (i = 0; i < openedTickets; i++) {
			tickets.push(new Ticket(i));
		}
		for (i = 0; i < selectedTickets; i++) {
			tickets[i].setSelected(true);
		}
		container.render(tickets);
	}
}