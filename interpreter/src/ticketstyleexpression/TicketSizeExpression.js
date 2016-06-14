function TicketSizeExpression() {
	StyleExpression.call(this);
}
TicketSizeExpression.prototype = Object.create(StyleExpression.prototype);

TicketSizeExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	var value = this._getExpression("ticketSize"),
		sizeParts = value.split("x");
	this._setContextValue("width", sizeParts[0] + "px");
	this._setContextValue("height", sizeParts[1] + "px");
};