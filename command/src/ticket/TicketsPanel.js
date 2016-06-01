function TicketsPanel(selector) {
	var TICKETS_AMOUNT = 15;
	var self = this,
		ticketsPanel = document.getElementById(selector),
		tickets = [];

	for (var i = 0; i < TICKETS_AMOUNT; i++) {
		var ticket = new TicketView(i + 1);
		tickets.push(ticket);
		ticketsPanel.appendChild(ticket.getView());
	}

	this.selectTickets = function(tickets) {
		console.log("panel: select", tickets);
	};

	this.setLuckyNumber = function(lucky) {
		console.log("panel: setLuckyNumber", lucky);
	};

	this.sort = function(type) {
		console.log("panel: sort", type);
	};
}