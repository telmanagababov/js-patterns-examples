function Ticket(id) {
	var self = this;

	this._TICKET_CLASS = "ticket";
	this._BACKGROUND_CLASS = "bg";
	this._SELECTED_CLASS = "selected";
	this._LABEL_CLASS = "label";
	
	this._id = id;
	this._isSelected = false;
	this._ticket = this.getTicket();
	this._bg = this.getBg();
	this._label = this.getLabel();

	this._ticket.appendChild(this._bg);
	this._ticket.appendChild(this._label);
	this._ticket.addEventListener("click", function() { self.toggleState(); });
}

Ticket.prototype = {

	show: function () {
		this._ticket.classList.remove(ViewState.HIDDEN);
	},

	hide: function () {
		this._ticket.classList.add(ViewState.HIDDEN);
	},

	getView: function () {
		return this._ticket;
	},

	toggleState: function() {
		this._isSelected = !this._isSelected;
		this.updateState();
		this.onToggleState(this._isSelected);
	},

	updateState: function() {
		if (this._isSelected === true) {
			this._ticket.classList.add(this._SELECTED_CLASS);
		} else {
			this._ticket.classList.remove(this._SELECTED_CLASS);
		}
	},

	setSelected: function(value) {
		this._isSelected = value;
		this.updateState();
	},
	
	getSelected: function () {
		return this._isSelected;
	},
	
	getTicket: function() {
		var ticket = document.createElement("div");
		ticket.classList.add(this._TICKET_CLASS);
		return ticket;
	},
	
	getId: function () {
		return this._id;
	},

	getBg: function() {
		var bg = document.createElement("div");
		bg.classList.add(this._BACKGROUND_CLASS);
		return bg;
	},

	getLabel: function() {
		var label = document.createElement("div");
		label.classList.add(this._LABEL_CLASS);
		label.innerHTML = this._id;
		return label;
	},
	
	onToggleState: function() {}
};