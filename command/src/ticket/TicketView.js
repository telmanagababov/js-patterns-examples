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
	self.isSelected = false;
	self.id = id;

	ticket.addEventListener("click", function () {
		self.isSelected = !self.isSelected;
		self.updateState();
		self.onChanged();
	});

	self.updateState = function () {
		if (self.isSelected === true) {
			ticket.classList.add(SELECTED_CLASS);
		} else {
			ticket.classList.remove(SELECTED_CLASS);
		}
	};
	
	self.select = function () {
		self.isSelected = true;
		self.updateState();
	};

	self.unselect = function () {
		self.isSelected = false;
		self.updateState();
	};

	self.getView = function () {
		return ticket;
	};

	self.onChanged = function () {
	};
}