function TicketsManager(selector) {
	var PANEL_OFFSET = 20,
		TICKET_OFFSET = 5;
	var ticketsPanel = document.querySelector(selector),
		panelWidth = ticketsPanel.offsetWidth - PANEL_OFFSET*2,
		panelHeight = ticketsPanel.offsetHeight - PANEL_OFFSET*2,
		ticketsStyleFactory = new TicketStyleFactory(),
		ticketsAmount = 0,
		tickets = [],
		currentTicket = null,
		style = null,
		i = 0;
	
	this.applyConfiguration = function (configuration) {
		style = ticketsStyleFactory.parse(configuration);
		ticketsAmount = getTicketsAmount(style);
		for (i = 0; i < ticketsAmount; i++) {
			currentTicket = getTicket(i);
			currentTicket.updateStyle(style);
			currentTicket.show();
		}
		for (i = ticketsAmount; i < tickets.length; i++) {
			tickets[i].hide();
		}
	};
	
	function getTicketsAmount(ticketSize) {
		var ticketHeight = parseInt(ticketSize.height) + TICKET_OFFSET*2,
			ticketWidth = parseInt(ticketSize.width) + TICKET_OFFSET*2,
			rows = Math.floor(panelHeight / ticketHeight),
			cols = Math.floor(panelWidth / ticketWidth);
		return rows * cols;
	}
	
	function getTicket(id) {
		if(!tickets[id]) {
			var newTicket = new Ticket(i + 1);
			ticketsPanel.appendChild(newTicket.getView());
			tickets.push(newTicket);
		}
		return tickets[id];
	}
}