window.onload = function() {

	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		REFRESH_CONTROL_SELECTOR = "#refresh-control",
		MODE_30_CONTROL_SELECTOR = "#mode-30",
		MODE_50_CONTROL_SELECTOR = "#mode-50",
		MODE_75_CONTROL_SELECTOR = "#mode-75",
		MODE_90_CONTROL_SELECTOR = "#mode-90";
	var ticketsPanel = new TicketsPanel(TICKETS_PANEL_SELECTOR),
		refreshControl = new Control(REFRESH_CONTROL_SELECTOR),
		mode30Control = new Control(MODE_30_CONTROL_SELECTOR),
		mode50Control = new Control(MODE_50_CONTROL_SELECTOR),
		mode75Control = new Control(MODE_75_CONTROL_SELECTOR),
		mode90Control = new Control(MODE_90_CONTROL_SELECTOR);

	refreshControl.onClick = function () {
		ticketsPanel.refresh();
	};
	mode30Control.onClick =
	mode50Control.onClick =
	mode75Control.onClick =
	mode90Control.onClick = function (selector) {
		ticketsPanel.setMode(selector.split("-")[1]);
	};
};