function TicketsPanel(selector, gameModel) {
	var self = this,
		view = document.querySelector(selector),
		tickets = [];

	init();

	self.reset = function () {
		view.innerHTML = "";
		tickets = [];
		init();
	};

	self.getSelectedTicketsAmount = function() {
		return tickets.filter(function(item) {
			return item.getSelected() === true;
		}).length;
	};

	function init() {
		for(var i = 0, len = gameModel.streamInfo.ticketsAmount; i < len; i++) {
			var ticket = createTicket(i);
			ticket.onClick = function(){this.toggleState()};
			ticket.onToggleState = function(){self.onChanged()};
			tickets.push(ticket);
			view.appendChild(ticket.getView());
		}
	}

	function createTicket(id) {
		return gameModel.gameInfo.isSecureMode ?
			new SecureTicket(id, gameModel.streamInfo.ticketPrice, gameModel.roundInfo) :
			new Ticket(id);
	}

	self.onChanged = function() {};
}