function SecureTicket(id, price, roundInfo) {
	var self = this,
		ticket = new Ticket(id);

	self.getView = function () {
		return ticket.getView();
	};

	self.toggleState = function() {
		if(ticket.getSelected() === true || roundInfo.balance >= price) {
			ticket.toggleState();
		} else {
			showSecureInfo();
		}
	};

	self.setSelected = function(value) {
		ticket.setSelected(value);
	};

	self.getSelected = function () {
		return ticket.getSelected();
	};

	function showSecureInfo() {
		var dialogArea = document.body.appendChild(document.createElement("div"));
		$(dialogArea).text("You have not enough money").dialog({
			modal: true,
			title: "error"
		});
	}

	ticket.onClick = function (value) {self.onClick(value);};
	ticket.onToggleState = function (value) {self.onToggleState(value);};
	self.onClick = function() {};
	self.onToggleState = function() {};
}
SecureTicket.prototype = Object.create(Ticket.prototype);