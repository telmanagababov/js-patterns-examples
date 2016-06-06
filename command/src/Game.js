function Game() { /*CLIENT*/
	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		OPEN_SETTINGS_CONTROL_SELECTOR = "#open-settings-control",
		SETTINGS_PANEL_SELECTOR = "#settings-panel";
	var ticketsManager = new TicketsManager(TICKETS_PANEL_SELECTOR),
		openSettingsControl = new Control(OPEN_SETTINGS_CONTROL_SELECTOR), 
		settingsManager = new SettingsManager(SETTINGS_PANEL_SELECTOR);

	settingsManager.close();

	settingsManager.onSortOption = function(type) {
		settingsManager.addSetting(new SortAction(ticketsManager, type));
		settingsManager.applySettings();
	};
	
	settingsManager.onSelectOption = function(type) {
		settingsManager.addSetting(new SelectAction(ticketsManager, type));
		settingsManager.applySettings();
	};
	
	settingsManager.onApply = function() {
		settingsManager.close();
		openSettingsControl.show();
	};

	settingsManager.onCancel = function() {
		settingsManager.addSetting(new UnselectAction(ticketsManager));
		settingsManager.addSetting(new UnsortAction(ticketsManager));
		settingsManager.applySettings();
		settingsManager.close();
		openSettingsControl.show();
	};

	this.start = function() {
		openSettingsControl.onClick = function() {
			openSettingsControl.hide();
			settingsManager.open();
		}
	}
}