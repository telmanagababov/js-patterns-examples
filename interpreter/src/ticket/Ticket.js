function Ticket(id) {
	var TICKET_CLASS = "ticket",
		BACKGROUND_CLASS = "bg",
		SELECTED_CLASS = "selected",
		LABEL_CLASS = "label";
	var isSelected = false,
		ticket = getTicket(),
		bg = getBg(),
		label = getLabel();

	ticket.appendChild(bg);
	ticket.appendChild(label);
	ticket.addEventListener("click", toggleState);

	this.updateStyle = function (style) {
		ticket.style.backgroundImage = style.backgroundImage;
		ticket.style.width = style.width;
		ticket.style.height = style.height;
		label.style.color = style.color;
		bg.style.backgroundColor = style.backgroundColor;
		bg.style.opacity = style.opacity;
	};

	this.show = function() {
		ticket.classList.remove(ViewState.HIDDEN);
	};

	this.hide = function() {
		ticket.classList.add(ViewState.HIDDEN);
	};

	this.getView = function () {
		return ticket;
	};
	
	function toggleState () {
		isSelected = !isSelected;
		updateState();
	}
	
	function updateState () {
		if (isSelected === true) {
			ticket.classList.add(SELECTED_CLASS);
		} else {
			ticket.classList.remove(SELECTED_CLASS);
		}
	}
	
	function getTicket() {
		var ticket = document.createElement("div");
		ticket.classList.add(TICKET_CLASS);
		return ticket;
	}

	function getBg() {
		var bg = document.createElement("div");
		bg.classList.add(BACKGROUND_CLASS);
		ticket.appendChild(bg);
		return bg;
	}
	
	function getLabel() {
		var label = document.createElement("div");
		label.classList.add(LABEL_CLASS);
		label.innerHTML = id;
		return label;
	}
}