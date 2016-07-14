function GameModel() {

	this.accountInfo = {
		balance: 0
	};

	this.streamInfo = {
		ticketsAmount: 0,
		ticketPrice: 0
	};

	this.roundInfo = {
		selectedTickets: 0,
		totalPrice: 0,
		balance: 0
	};

	this.gameInfo = {
		isSecureMode: false
	};

	this.updateRoundInfo = function () {
		this.roundInfo.totalPrice = this.roundInfo.selectedTickets * this.streamInfo.ticketPrice;
		this.roundInfo.balance = this.accountInfo.balance - this.roundInfo.totalPrice;
	};
}