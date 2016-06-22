function TicketsCollection90(selector) {
	TicketsCollection.call(this, selector);
}
TicketsCollection90.prototype = Object.create(TicketsCollection.prototype);

TicketsCollection90.prototype.createTickets = function (ticketsRange) {
	var TICKETS_IN_SLIP = 2;
	var tickets = [];
	for(var i = 0, maxSlips = ticketsRange.length - (TICKETS_IN_SLIP - 1); i < maxSlips; i = i+TICKETS_IN_SLIP) {
		tickets.push(new Ticket90Slip(ticketsRange.slice(i, i + TICKETS_IN_SLIP)));
	}
	return tickets;
};