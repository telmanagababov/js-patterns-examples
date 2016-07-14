window.onload = function() {

	var TICKETS_PANEL_SELECTOR = "#tickets-panel",
		INFO_PANEL_SELECTOR = "#info-panel",
		LTM_MODE_CHECKBOX_SELECTOR = "#ltm-mode .info-input";
	var gameModel = createGameModel(),
		ticketsPanel = new TicketsPanel(TICKETS_PANEL_SELECTOR, gameModel),
		infoPanel = new InfoPanel(INFO_PANEL_SELECTOR, gameModel),
		ltmModeCheckbox = document.querySelector(LTM_MODE_CHECKBOX_SELECTOR);

	ticketsPanel.onChanged = function () {
		update();
	};

	ltmModeCheckbox.onchange = function () {
		gameModel.gameInfo.isSecureMode = ltmModeCheckbox.checked;
		ticketsPanel.reset();
		update();
	};

	function update() {
		gameModel.roundInfo.selectedTickets = ticketsPanel.getSelectedTicketsAmount();
		gameModel.updateRoundInfo();
		infoPanel.update();
	}

	function createGameModel() {
		var model = new GameModel();
		model.accountInfo.balance = 10;
		model.streamInfo.ticketPrice = 3;
		model.streamInfo.ticketsAmount = 10;
		model.gameInfo.isSecureMode = false;
		model.updateRoundInfo();
		return model;
	}
};