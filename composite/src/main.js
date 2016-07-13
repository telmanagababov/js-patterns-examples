window.onload = function() {

	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		COLOR_INPUT_SELECTOR = "#tickets-color",
		BACKGROUND_INPUT_SELECTOR = "#tickets-background",
		BORDER_INPUT_SELECTOR = "#tickets-border";
	var ticketsPanel = document.querySelector(TICKETS_PANEL_SELECTOR),
		colorInput = document.querySelector(COLOR_INPUT_SELECTOR),
		backgroundInput = document.querySelector(BACKGROUND_INPUT_SELECTOR),
		borderInput = document.querySelector(BORDER_INPUT_SELECTOR);

	var ticketsContainer = new TicketsContainer(),
		ticketsContainerLeft = new TicketsContainer("low price tickets"),
		ticketsContainerRight = new TicketsContainer("high price tickets");
	ticketsContainerLeft.add(new Ticket(1));
	ticketsContainerLeft.add(new Ticket(2));
	ticketsContainerLeft.add(new Ticket(3));
	ticketsContainerLeft.add(new Ticket(4));
	ticketsContainer.add(ticketsContainerLeft);
	ticketsContainerRight.add(new Ticket(5));
	ticketsContainerRight.add(new Ticket(6));
	ticketsContainerRight.add(new Ticket(7));
	ticketsContainerRight.add(new Ticket(8));
	ticketsContainerRight.add(new Ticket(9));
	ticketsContainerRight.add(new Ticket(10));
	ticketsContainer.add(ticketsContainerRight);
	ticketsPanel.appendChild(ticketsContainer.getView());
	
	ticketsContainer.setColor(colorInput.value);
	ticketsContainer.setBackground(backgroundInput.value);
	ticketsContainer.setBorder(borderInput.value);

	colorInput.onchange = function () {
		ticketsContainer.setColor(colorInput.value);
	};

	backgroundInput.onchange = function () {
		ticketsContainer.setBackground(backgroundInput.value);
	};

	borderInput.onchange = function () {
		ticketsContainer.setBorder(borderInput.value);
	};
};