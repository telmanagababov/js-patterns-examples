function Ticket75(id) {
	Ticket.call(this, id);
}
Ticket75.prototype = Object.create(Ticket.prototype);

Ticket75.prototype.getTicket = function() {
	var ticket = Ticket.prototype.getTicket.call(this);
	ticket.classList.add("ticket75");
	return ticket;
};