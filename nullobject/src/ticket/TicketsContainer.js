function TicketsContainer(selector) {
	var ticketsPanel = document.querySelector(selector);
	
	this.render = function (tickets) {
		for (var i = 0, len = tickets.length; i < len; i++) {
			this.renderTicket(tickets[i]);
		}
	};

	this.renderTicket = function (ticket) {
		ticketsPanel.appendChild(ticket.getView());
	};

	this.remove = function (tickets) {
		for (var i = 0, len = tickets.length; i < len; i++) {
			this.removeTicket(tickets[i]);
		}
	};

	this.removeTicket = function (ticket) {
		ticket.hide();
	};
}