function TicketView(id) {
	var TICKET_CLASS = "ticket",
		SELECTED_CLASS = "selected",
		LABEL_CLASS = "label";
	var self = this,
		ticket = document.createElement("div"),
		label = document.createElement("div");

	label.classList.add(LABEL_CLASS);
	label.innerHTML = id;
	ticket.classList.add(TICKET_CLASS);
	ticket.appendChild(label);

	ticket.addEventListener("click", function () {
		self.isSelected = !self.isSelected;
		self.updateState();
		self.onChanged();
	});

	self.isSelected = false;

	self.updateState = function () {
		if (self.isSelected === true) {
			ticket.classList.add(SELECTED_CLASS);
		} else {
			ticket.classList.remove(SELECTED_CLASS);
		}
	};

	self.getView = function () {
		return ticket;
	};

	self.onChanged = function () {
	};
}