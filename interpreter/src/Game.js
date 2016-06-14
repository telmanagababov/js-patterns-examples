function Game() {
	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		OPEN_SETTINGS_CONTROL_SELECTOR = "#open-settings-control",
		SETTINGS_PANEL_SELECTOR = "#settings-panel";
	var ticketsManager = new TicketsManager(TICKETS_PANEL_SELECTOR),
		openSettingsControl = new Control(OPEN_SETTINGS_CONTROL_SELECTOR), 
		settingsPanel = new SettingsPanel(SETTINGS_PANEL_SELECTOR);
	
	settingsPanel.onApply = function() {
		ticketsManager.applyConfiguration(settingsPanel.getConfiguration());
	};
	
	settingsPanel.onOk = function() {
		settingsPanel.hide();
		openSettingsControl.show();
	};

	this.start = function() {
		openSettingsControl.onClick = function() {
			openSettingsControl.hide();
			settingsPanel.show();
		};
		settingsPanel.hide();
		ticketsManager.applyConfiguration(settingsPanel.getConfiguration());
	}
}