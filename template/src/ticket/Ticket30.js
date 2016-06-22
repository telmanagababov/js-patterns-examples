function Ticket30(id) {
	Ticket.call(this, id);
}
Ticket30.prototype = Object.create(Ticket.prototype);

Ticket30.prototype.getTicket = function() {
	var ticket = Ticket.prototype.getTicket.call(this);
	ticket.classList.add("ticket30");
	return ticket;
};