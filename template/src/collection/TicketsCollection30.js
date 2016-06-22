function TicketsCollection30(selector) {
	TicketsCollection.call(this, selector);
}
TicketsCollection30.prototype = Object.create(TicketsCollection.prototype);

TicketsCollection30.prototype.getTicket = function (id) {
	return new Ticket30(id);
};