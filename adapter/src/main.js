window.onload = function() {

	var INFO_PANEL_SELECTOR = "#info-panel",
		OPEN_CONTROL_SELECTOR = "#open-control",
		CLOSE_CONTROL_SELECTOR = "#close-control",
		PLAY_CONTROL_SELECTOR = "#play-control",
		PAUSE_CONTROL_SELECTOR = "#pause-control",
		RESET_CONTROL_SELECTOR = "#reset-control";
	var infoPanel = new InfoPanel(INFO_PANEL_SELECTOR),
		openControl = new Control(OPEN_CONTROL_SELECTOR),
		closeControl = new Control(CLOSE_CONTROL_SELECTOR),
		playControl = new Control(PLAY_CONTROL_SELECTOR),
		pauseControl = new Control(PAUSE_CONTROL_SELECTOR),
		resetControl = new Control(RESET_CONTROL_SELECTOR);
	
	openControl.onClick = function () {
		infoPanel.openTutorial();
	};
	closeControl.onClick = function () {
		infoPanel.closeTutorial();
	};
	playControl.onClick = function () {
		infoPanel.playTutorial();
	};
	pauseControl.onClick = function () {
		infoPanel.pauseTutorial();
	};
	resetControl.onClick = function () {
		infoPanel.resetTutorial();
	};
};