function SortAction(ticketsPanel, sortType) {
	this.ticketsPanel = ticketsPanel;
	this.sortType = sortType;
}
SortAction.prototype = Object.create(IAction.prototype);

SortAction.prototype.execute = function() {
	this.ticketsPanel.sort(this.sortType);
};