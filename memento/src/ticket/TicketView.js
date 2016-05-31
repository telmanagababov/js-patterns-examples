function TicketView() {
  var TICKET_CLASS = "ticket",
      SELECTED_CLASS = "selected";
  var self = this,
      ticket = document.createElement("div");
    
  ticket.classList.add(TICKET_CLASS);
  ticket.addEventListener("click", function() {
    self.isSelected = !self.isSelected;
    self.updateState();
    self.onChanged();
  });
  
  self.isSelected = false;
  
  self.updateState = function() {
    if(self.isSelected === true) {
      ticket.classList.add(SELECTED_CLASS);
    } else {
      ticket.classList.remove(SELECTED_CLASS);
    }
  };
  
  self.getView = function() {
    return ticket;
  };
  
  self.onChanged = function() {};
}