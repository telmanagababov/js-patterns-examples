function TicketsContainer(label) {
	this._graphics = [];
	this._container = this._getContainer();
	if(label) {
		this._label = this._getLabel(label);
		this._container.appendChild(this._label);
	}
}
TicketsContainer.prototype = Object.create(IGraphic.prototype);

TicketsContainer.prototype.add = function (graphic) {
	this._graphics.push(graphic);
	this._container.appendChild(graphic.getView());
};
TicketsContainer.prototype.getView = function () {
	return this._container;
};
TicketsContainer.prototype.setColor = function(value) {
	this._graphics.forEach(function(item) {
		item.setColor(value);
	});
	this._container.style.color = value;
};
TicketsContainer.prototype.setBackground = function(value) {
	this._graphics.forEach(function(item) {
		item.setBackground(value);
	});
};
TicketsContainer.prototype.setBorder =  function(value) {
	this._graphics.forEach(function(item) {
		item.setBorder(value);
	});
	this._container.style.borderColor = value;
};

TicketsContainer.prototype._getContainer =  function() {
	var container = document.createElement("div");
	container.classList.add("tickets-container");
	return container;
};

TicketsContainer.prototype._getLabel =  function(text) {
	var label = document.createElement("div");
	label.classList.add("tickets-container-label");
	label.innerHTML = text;
	return label;
};