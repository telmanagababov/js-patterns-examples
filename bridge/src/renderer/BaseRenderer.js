function BaseRenderer(selector) {
	this._select = document.querySelector(selector);
	this._container = document.createElement("div");
	this._container.classList.add("select-container");
	this._list = document.createElement("div");
	this._list.classList.add("select-list");
	this._input = null;
	this._values = [];
}
BaseRenderer.prototype = Object.create(IRenderer.prototype);

BaseRenderer.prototype.render = function () {
	this._select.style.display = "none";
	this._values = this._renderValues();
	this._input = this._renderInput();
	this._values.forEach(function(item) {
		this._list.appendChild(item.getView());
	}.bind(this));
	this._container.appendChild(this._input.getView());
	this._container.appendChild(this._list);
	this._select.parentNode.insertBefore(this._container, this._select);
};

BaseRenderer.prototype._renderInput = function () {
	return null;
};

BaseRenderer.prototype._renderValues = function () {
	return null;
};

BaseRenderer.prototype.getInput = function () {
	return this._input;
};

BaseRenderer.prototype.getValues = function () {
	return this._values;
};