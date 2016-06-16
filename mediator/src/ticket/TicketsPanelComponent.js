function TicketsPanelComponent(gameMediator) {
	BaseComponent.call(this, gameMediator);
	
	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		TICKETS_PAGE_AMOUNT = 15,
		TICKETS_PAGES = 4;
	var ticketsPanel = document.querySelector(TICKETS_PANEL_SELECTOR),
		currentPage = 1,
		tickets = [];

	this.setPage = function (value) {
		currentPage = value;
		updateTickets();
	};

	this.getCurrentPage = function () {
		return currentPage;
	};

	this.isFirstPage = function () {
		return currentPage === 1;
	};

	this.isLastPage = function () {
		return currentPage === TICKETS_PAGES;
	};

	function updateTickets() {
		var firstTicket = (currentPage - 1) * TICKETS_PAGE_AMOUNT,
			lastTicket = firstTicket + TICKETS_PAGE_AMOUNT,
			currentTicket = null;
		tickets.forEach(function(ticket) {
			ticket.hide();
		});
		for (var i = firstTicket; i < lastTicket; i++) {
			currentTicket = getTicket(i);
			currentTicket.show();
		}
	}
	
	function getTicket(id) {
		if(!tickets[id]) {
			var newTicket = new Ticket(id + 1);
			ticketsPanel.appendChild(newTicket.getView());
			tickets[id] = newTicket;
		}
		return tickets[id];
	}

	updateTickets();
	gameMediator.registerTicketsPanel(this);
}

TicketsPanelComponent.prototype = Object.create(BaseComponent.prototype);