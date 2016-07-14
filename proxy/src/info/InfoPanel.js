function InfoPanel(selector, gameModel) {
	var BALANCE_INFO_SELECTOR = "#balance",
		TICKET_PRICE_SELECTOR = "#ticket-price",
		SELECTED_TICKETS_SELECTOR = "#selected-tickets",
		TOTAL_PRICE_SELECTOR = "#total-price",
		VALUE_SELECTOR = ".info-value";
	var view = document.querySelector(selector),
		balanceInfo = view.querySelector(BALANCE_INFO_SELECTOR + " " + VALUE_SELECTOR),
		ticketPriceInfo = view.querySelector(TICKET_PRICE_SELECTOR + " " + VALUE_SELECTOR),
		selectedTicketsInfo = view.querySelector(SELECTED_TICKETS_SELECTOR + " " + VALUE_SELECTOR),
		totalPriceInfo = view.querySelector(TOTAL_PRICE_SELECTOR + " " + VALUE_SELECTOR);

	this.update = function () {
		balanceInfo.innerHTML = gameModel.accountInfo.balance;
		ticketPriceInfo.innerHTML = gameModel.streamInfo.ticketPrice;
		selectedTicketsInfo.innerHTML = gameModel.roundInfo.selectedTickets;
		totalPriceInfo.innerHTML = gameModel.roundInfo.totalPrice;
	};

	this.update();
}