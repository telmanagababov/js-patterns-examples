function TicketsCollection50(selector) {
	TicketsCollection.call(this, selector);
}
TicketsCollection50.prototype = Object.create(TicketsCollection.prototype);

TicketsCollection50.prototype.getTicket = function (id) {
	return new Ticket50(id);
};