function SettingsManager(selector) { /*INVOKER*/
	var self = this,
		settingActions = [],
		settingsPanel = new SettingsPanelView(selector);
	
	this.addSetting = function(settingAction) {
		settingActions.push(settingAction);
	};

	this.applySettings = function() {
		settingActions.forEach(function(settingAction) {
			settingAction.execute();
		});
		settingActions = [];
	};
	
	this.close = function() {
		settingsPanel.hide();
	};
	
	this.open = function () {
		settingsPanel.show();
	};

	settingsPanel.onSortOption = function (type) {self.onSortOption(type);};
	settingsPanel.onSelectOption = function (type) {self.onSelectOption(type);};
	settingsPanel.onCancel = function () {self.onCancel();};
	settingsPanel.onApply = function () {self.onApply();};
	this.onSortOption = function (type) {};
	this.onSelectOption = function (type) {};
	this.onCancel = function () {};
	this.onApply = function () {};
}