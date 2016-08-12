function Ticket(id) {
	var self = this;

	this._CONTAINER_TYPE = "div";
	this._TICKET_CLASS = "ticket";
	this._BACKGROUND_CLASS = "bg";
	this._SELECTED_CLASS = "selected";
	this._LABEL_CLASS = "label";
	
	this._id = id;
	this._isSelected = false;
	this._ticket = this._getTicket();
	this._bg = this._getBg();
	this._label = this._getLabel();

	this._ticket.appendChild(this._bg);
	this._ticket.appendChild(this._label);
	this._ticket.addEventListener("click", function() { self._toggleState(); });
}
Ticket.prototype = Object.create(IGraphic.prototype);

Ticket.prototype.getView = function () {
	return this._ticket;
};
Ticket.prototype.setColor = function(value) {
	this._label.style.color = value;
};
Ticket.prototype.setBackground = function(value) {
	this._bg.style.backgroundColor = value;
};
Ticket.prototype.setBorder =  function(value) {
	this._ticket.style.borderColor = value;
};

Ticket.prototype._toggleState = function() {
	this._isSelected = !this._isSelected;
	this._updateState();
};
Ticket.prototype._updateState =function() {
	if (this._isSelected === true) {
		this._ticket.classList.add(this._SELECTED_CLASS);
	} else {
		this._ticket.classList.remove(this._SELECTED_CLASS);
	}
};
Ticket.prototype._getTicket = function() {
	var ticket = document.createElement(this._CONTAINER_TYPE);
	ticket.classList.add(this._TICKET_CLASS);
	return ticket;
};
Ticket.prototype._getBg = function() {
	var bg = document.createElement(this._CONTAINER_TYPE);
	bg.classList.add(this._BACKGROUND_CLASS);
	return bg;
};
Ticket.prototype._getLabel = function() {
	var label = document.createElement(this._CONTAINER_TYPE);
	label.classList.add(this._LABEL_CLASS);
	label.innerHTML = this._id;
	return label;
};