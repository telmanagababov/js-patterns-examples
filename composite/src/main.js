window.onload = function() {

	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		COLOR_INPUT_SELECTOR = "#tickets-color",
		BACKGROUND_INPUT_SELECTOR = "#tickets-background",
		BORDER_INPUT_SELECTOR = "#tickets-border";
	var ticketsPanel = document.querySelector(TICKETS_PANEL_SELECTOR),
		colorInput = document.querySelector(COLOR_INPUT_SELECTOR),
		backgroundInput = document.querySelector(BACKGROUND_INPUT_SELECTOR),
		borderInput = document.querySelector(BORDER_INPUT_SELECTOR);

	var ticketsContainer = new TicketsContainer();

	addContainer(ticketsContainer, [1, 2, 3, 4], "low price tickets");
	addContainer(ticketsContainer, [5, 6, 7, 8, 9, 10], "high price tickets");
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

	function addContainer(parentContainer, ticketIds, label) {
		var container = new TicketsContainer(label);
		ticketIds.forEach(function(id) {
			container.add(new Ticket(id));
		});
		parentContainer.add(container);
	}
};