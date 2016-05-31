function TicketsPanel(selector) {
  var TICKETS_AMOUNT = 10;
  var self = this,
      ticketsPanel = document.getElementById(selector),
      tickets = [];
  
  for(var i = 0; i < TICKETS_AMOUNT; i++) {
    var ticket = new TicketView();
    ticket.onChanged = function(){self.onChanged()};
    tickets.push(ticket);
    ticketsPanel.appendChild(ticket.getView());
  }
  
  self.getState = function() {
    var state = tickets.map(function(ticket) {
      return {isSelected: ticket.isSelected};
    });
    return new TicketsState(state);
  };
  
  self.setState = function(ticketsState) {
    ticketsState.tickets.forEach(function(state, i) {
      tickets[i].isSelected = state.isSelected;
      tickets[i].updateState();
    });
  }
  
  self.onChanged = function() {};
}