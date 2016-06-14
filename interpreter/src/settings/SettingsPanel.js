function SettingsPanel(selector) {
	var OK_CONTROL_SELECTOR = "#settings-ok-control",
		APPLY_CONTROL_SELECTOR = "#settings-apply-control";
	var self = this,
		view = document.querySelector(selector),
		optionsPanel = new OptionsPanel(selector),
		okControl = new Control(OK_CONTROL_SELECTOR),
		applyControl = new Control(APPLY_CONTROL_SELECTOR);

	okControl.onClick = function () {
		self.onOk();
	};

	applyControl.onClick = function () {
		self.onApply();
	};
	
	this.show = function() {
		view.classList.remove(ViewState.HIDDEN);
	};
	
	this.hide = function() {
		view.classList.add(ViewState.HIDDEN);
	};
	
	this.getConfiguration = function() {
		return optionsPanel.getConfiguration();
	};
	
	this.onOk = function() {};
	this.onApply = function() {};
}