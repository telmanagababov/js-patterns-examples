function SettingsManager() {
	var settings = [];

	this.addSetting = function(settingAction) {
		settings.push(settingAction);
	};

	this.applySettings = function() {
		settings.forEach(function(settingAction) {
			settingAction.execute();
		});
		settings = [];
	}
}