function OptionsPanel(selector) {
	var BACKGROUND_IMAGE_SELECTOR = "#background-image-picker",
		BACKGROUND_SHADE_SELECTOR = "#background-shade-picker",
		BACKGROUND_OPACITY_SELECTOR = "#background-opacity-picker",
		LABEL_COLOR_SELECTOR = "#label-color-picker",
		TICKET_SIZE_SELECTOR = "#ticket-size-picker",
		SETTINGS_INPUT_SELECTOR = "#settings-input";
	var backgroundImagePicker = document.querySelector(BACKGROUND_IMAGE_SELECTOR),
		backgroundShadePicker = document.querySelector(BACKGROUND_SHADE_SELECTOR),
		backgroundOpacityPicket = document.querySelector(BACKGROUND_OPACITY_SELECTOR),
		labelColorPicket = document.querySelector(LABEL_COLOR_SELECTOR),
		ticketSizePicket = document.querySelector(TICKET_SIZE_SELECTOR),
		settingsInput = document.querySelector(SETTINGS_INPUT_SELECTOR);
	
	backgroundImagePicker.addEventListener("change", updateInput);
	backgroundShadePicker.addEventListener("change", updateInput);
	backgroundOpacityPicket.addEventListener("change", updateInput);
	labelColorPicket.addEventListener("change", updateInput);
	ticketSizePicket.addEventListener("change", updateInput);
	updateInput();
	
	function updateInput() {
		settingsInput.value = 
			"backgroundImage:" + backgroundImagePicker.value + " " +
			"backgroundShade:" + backgroundShadePicker.value + " " +
			"backgroundOpacity:" + backgroundOpacityPicket.value + " " +
			"labelColor:" + labelColorPicket.value + " " +
			"ticketSize:" + ticketSizePicket.value
	}
	
	this.getConfiguration = function() {
		return settingsInput.value;
	}
}