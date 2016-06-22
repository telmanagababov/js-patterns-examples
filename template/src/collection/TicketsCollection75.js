function TicketsCollection75(selector) {
	TicketsCollection.call(this, selector);
}
TicketsCollection75.prototype = Object.create(TicketsCollection.prototype);

TicketsCollection75.prototype.getTicket = function (id) {
	return new Ticket75(id);
};