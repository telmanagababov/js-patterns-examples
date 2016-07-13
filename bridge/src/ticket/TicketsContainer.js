function TicketsContainer(selector) {
	var ticketsPanel = document.querySelector(selector);
	
	this.render = function (tickets) {
		this.clear();
		for (var i = 0, len = tickets.length; i < len; i++) {
			this.renderTicket(tickets[i]);
		}
	};
	
	this.clear = function () {
		ticketsPanel.innerHTML = "";
	};
	
	this.renderTicket = function (ticket) {
		ticketsPanel.appendChild(ticket.getView());
	};
}