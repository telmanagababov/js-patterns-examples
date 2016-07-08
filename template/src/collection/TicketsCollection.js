function TicketsCollection(selector) {
	this._ticketsPanel = document.querySelector(selector);
}

TicketsCollection.prototype = {
	
	render: function (ticketsRange) {
		var tickets = this.createTickets(ticketsRange);
		this.resetPanel();
		for (var i = 0, len = tickets.length; i < len; i++) {
			this.renderTicket(tickets[i]);
		}
	},

	createTickets: function (ticketsRange) {
		var tickets = [];
		for (var i = 0, len = ticketsRange.length; i < len; i++) {
			tickets.push(this.getTicket(ticketsRange[i]));
		}
		return tickets;
	},

	getTicket: function () {
		return null;
	},

	resetPanel: function () {
		this._ticketsPanel.innerHTML = "";
	},

	addTicket: function (ticket) {
		this._ticketsPanel.appendChild(ticket.getView());
	}
};