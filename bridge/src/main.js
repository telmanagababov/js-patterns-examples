window.onload = function() {

	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		OPENED_TICKETS_SELECTOR = "#opened-tickets",
		SELECTED_TICKETS_SELECTOR = "#selected-tickets";
	var ticketsPanel = new TicketsPanel(TICKETS_PANEL_SELECTOR),
		openedTicketsRender = new VerticalRenderer(OPENED_TICKETS_SELECTOR),
		openedTicketsSelect = new Selector(openedTicketsRender),
		selectedTicketsRender = new HorizontalRenderer(SELECTED_TICKETS_SELECTOR),
		selectedTicketsSelect = new Selector(selectedTicketsRender);

	openedTicketsSelect.addChangeCallback(function(value) {
		ticketsPanel.openTickets(value);
	});
	
	selectedTicketsSelect.addChangeCallback(function (value) {
		ticketsPanel.selectTickets(value);
	});
};