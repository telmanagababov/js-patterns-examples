function SelectAction(ticketsPanel, selectedTickets) {
	this.ticketsPanel = ticketsPanel;
	this.selectedTickets = selectedTickets;
}
SelectAction.prototype = Object.create(IAction.prototype);

SelectAction.prototype.execute = function() {
	this.ticketsPanel.selectTickets(this.selectedTickets);
};