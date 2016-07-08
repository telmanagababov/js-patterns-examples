function TicketsCollection() {

	this.tickets = [];
	
	this.add = function (ticketsAmount) {
		var ticketsRange = [];
		for (var i = this.tickets.length, len = this.tickets.length + ticketsAmount; i < len; i++) {
			ticketsRange.push(new Ticket(i));
		}
		this.tickets = this.tickets.concat(ticketsRange);
		return ticketsRange;
	};

	this.remove = function (ticketsAmount) {
		var ticketsRange = [];
		for (var i = 0; i < ticketsAmount; i++) {
			ticketsRange.push(this.tickets.length ? this.tickets.shift() : new NullTicket());
		}
		return ticketsRange;
	};
}