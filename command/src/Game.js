function Game() { /*CLIENT*/
	var TICKETS_PANEL_ID = "tickets-panel",
		SETTINGS_PANEL_ID = "settings-panel";
	var ticketsPanel = new TicketsPanel(TICKETS_PANEL_ID), /*RECEIVER*/
		settingsPanel = new SettingsPanel(SETTINGS_PANEL_ID),
		settingsManager = new SettingsManager(); /* INVOKER */

	this.start = function() {
		settingsPanel.onApply = function() {
			settingsManager.addSetting(new SelectAction(ticketsPanel, settingsPanel.getSelectedTickets()));
			settingsManager.addSetting(new SortAction(ticketsPanel, settingsPanel.getSortType()));
			settingsManager.applySettings();
		}
	};
}