function StyleExpression() {
	this._context = null;
}
StyleExpression.prototype.interpret = function (context) {
	this._context = context;
};

StyleExpression.prototype._updateContext = function (expressionIn, expressionOut) {
	var value = this._getExpression(expressionIn);
	this._setContextValue(expressionOut, value);
};

StyleExpression.prototype._setContextValue = function (property, value) {
	this._context.output[property] = value;
};

StyleExpression.prototype._getExpression = function (expressionIn) {
	var valuePattern = new RegExp(expressionIn + ":" + "([^ \f\n\r]+)");
	return this._context.input.match(valuePattern)[1];
};