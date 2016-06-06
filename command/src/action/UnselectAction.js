function UnselectAction(ticketsPanel) {
	this.ticketsPanel = ticketsPanel;
}
UnselectAction.prototype = Object.create(IAction.prototype);

UnselectAction.prototype.execute = function() {
	this.ticketsPanel.unselectTickets();
};