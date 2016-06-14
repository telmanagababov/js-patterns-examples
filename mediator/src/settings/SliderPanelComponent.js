function SettingsPanelComponent() {
	var SLIDER_PANEL_SELECTOR = "#slider-panel",
		OK_CONTROL_SELECTOR = "#settings-ok-control",
		APPLY_CONTROL_SELECTOR = "#settings-apply-control";
	var self = this,
		view = document.querySelector(SLIDER_PANEL_SELECTOR),
		slider = new Slider(),
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
		return slider.getConfiguration();
	};
	
	this.onOk = function() {};
	this.onApply = function() {};
}