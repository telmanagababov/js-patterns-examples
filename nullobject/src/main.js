window.onload = function() {

	var DEFAULT_TICKETS_AMOUNT = 10,
		TICKETS_PANEL_SELECTOR = "#tickets-panel",
		VALUE_INPUT_SELECTOR = "#value-select",
		BUY_TICKETS_CONTROL_SELECTOR = "#buy-control";
	var ticketsPanel = new TicketsPanel(TICKETS_PANEL_SELECTOR),
		ticketsAmountSelect = document.querySelector(VALUE_INPUT_SELECTOR),
		buyTicketsControl = document.querySelector(BUY_TICKETS_CONTROL_SELECTOR);

	ticketsPanel.addTickets(DEFAULT_TICKETS_AMOUNT);
	
	buyTicketsControl.onclick = function () {
		ticketsPanel.buyTickets(ticketsAmountSelect.value);
	};
};