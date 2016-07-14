function Ticket(id) {
	var TICKET_VIEW_CLASS = "ticket",
		BACKGROUND_VIEW_CLASS = "bg",
		SELECTED_VIEW_CLASS = "selected",
		LABEL_VIEW_CLASS = "label";
	var self = this,
		isSelected = false,
		ticket = getTicket(),
		bg = getBg(),
		label = getLabel();

	init();

	self.getView = function () {
		return ticket;
	};

	self.toggleState = function() {
		isSelected = !isSelected;
		updateState();
		self.onToggleState(isSelected);
	};

	self.setSelected = function(value) {
		isSelected = value;
		updateState();
	};

	self.getSelected = function () {
		return isSelected;
	};

	function init() {
		ticket.appendChild(bg);
		ticket.appendChild(label);
		ticket.addEventListener("click", function() {
			self.onClick();
		});
	}

	function updateState() {
		if (isSelected === true) {
			ticket.classList.add(SELECTED_VIEW_CLASS);
		} else {
			ticket.classList.remove(SELECTED_VIEW_CLASS);
		}
	}

	function getTicket() {
		var ticket = document.createElement("div");
		ticket.classList.add(TICKET_VIEW_CLASS);
		return ticket;
	}

	function getBg() {
		var bg = document.createElement("div");
		bg.classList.add(BACKGROUND_VIEW_CLASS);
		return bg;
	}

	function getLabel() {
		var label = document.createElement("div");
		label.classList.add(LABEL_VIEW_CLASS);
		label.innerHTML = id;
		return label;
	}

	self.onClick = function() {};
	self.onToggleState = function() {};
}
Ticket.prototype = Object.create(Ticket.prototype);