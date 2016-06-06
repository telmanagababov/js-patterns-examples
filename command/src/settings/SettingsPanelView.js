function SettingsPanelView(selector) {
	var SORT_PICKER_SELECTOR = "#sort-picker",
		SELECT_PICKER_SELECTOR = "#tickets-picker",
		CANCEL_CONTROL_SELECTOR = "#settings-cancel-control",
		APPLY_CONTROL_SELECTOR = "#settings-apply-control";
	var self = this,
		panel = document.querySelector(selector),
		sortPicker = new Picker(selector + " " + SORT_PICKER_SELECTOR),
		selectPicker = new Picker(selector + " " + SELECT_PICKER_SELECTOR),
		cancelControl = new Control(selector + " " + CANCEL_CONTROL_SELECTOR),
		applyControl = new Control(selector + " " + APPLY_CONTROL_SELECTOR);

	this.show = function() {
		panel.classList.remove(ViewState.HIDDEN);
	};

	this.hide = function() {
		panel.classList.add(ViewState.HIDDEN);
	};

	sortPicker.onOption = function (type) {self.onSortOption(type);};
	selectPicker.onOption = function (type) {self.onSelectOption(type);};
	cancelControl.onClick = function () {self.onCancel();};
	applyControl.onClick = function () {self.onApply();};
	this.onSortOption = function () {};
	this.onSelectOption = function () {};
	this.onCancel = function () {};
	this.onApply = function () {};
}