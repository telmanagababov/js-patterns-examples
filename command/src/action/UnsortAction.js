function UnsortAction(ticketsPanel) {
	this.ticketsPanel = ticketsPanel;
}
UnsortAction.prototype = Object.create(IAction.prototype);

UnsortAction.prototype.execute = function() {
	this.ticketsPanel.unsort();
};