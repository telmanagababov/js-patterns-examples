function Ticket50(id) {
	Ticket.call(this, id);
}
Ticket50.prototype = Object.create(Ticket.prototype);

Ticket50.prototype.getTicket = function() {
	var ticket = Ticket.prototype.getTicket.call(this);
	ticket.classList.add("ticket50");
	return ticket;
};