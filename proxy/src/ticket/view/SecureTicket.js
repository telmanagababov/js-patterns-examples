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
		$(dialogArea).text("You have no enough money").dialog({
			modal: true,
			title: "error",
			close: function() {
				document.body.removeChild(dialogArea);
			}
		});
	}

	ticket.onClick = function (value) {self.onClick(value);};
	ticket.onToggleState = function (value) {self.onToggleState(value);};
	self.onClick = function() {};
	self.onToggleState = function() {};
}
Ticket.prototype = Object.create(Ticket.prototype);