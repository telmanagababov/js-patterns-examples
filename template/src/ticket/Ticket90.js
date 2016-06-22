function Ticket90(id) {
	Ticket.call(this, id);
}
Ticket90.prototype = Object.create(Ticket.prototype);

Ticket90.prototype.getTicket = function() {
	var ticket = Ticket.prototype.getTicket.call(this);
	ticket.classList.add("ticket90");
	return ticket;
};