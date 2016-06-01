function SetLuckyAction(ticketsPanel, luckyNumber) {
	this.ticketsPanel = ticketsPanel;
	this.luckyNumber = luckyNumber;
}
SetLuckyAction.prototype = Object.create(IAction.prototype);

SetLuckyAction.prototype.execute = function() {
	this.ticketsPanel.setLuckyNumber(this.luckyNumber);
};