function SettingsPanel(selector) {
	var self = this,
		settingsPanel = document.getElementById(selector);

	settingsPanel.addEventListener("click", function() {
		self.onApply();
	});
	
	self.getSelectedTickets = function () {
		return 0;	
	};
	
	self.getLuckyNumber = function () {
		return 0;
	};
	
	self.getSortType = function () {
		return 0;
	};
	
	self.onApply = function() {
		
	};
}