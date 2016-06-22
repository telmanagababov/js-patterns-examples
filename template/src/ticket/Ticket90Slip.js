function Ticket90Slip(range) {
	var self = this;
	this._tickets = range.map(function(id) {
		var ticket = new Ticket90(id);
		ticket.onToggleState = onToggleState;
		return ticket;
	});
	function onToggleState(state) {
		self._tickets.forEach(function(ticket){
			ticket.setSelected(state);
		});
	}
}
Ticket90Slip.prototype = Object.create(Ticket.prototype);

Ticket90Slip.prototype.getView = function() {
	var view = document.createElement("div");
	view.classList.add("ticket90Slip");
	this._tickets.forEach(function(ticket) {
		view.appendChild(ticket.getView());
	});
	return view;
};
