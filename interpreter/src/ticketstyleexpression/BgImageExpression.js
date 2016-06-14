function BgImageExpression() {
	StyleExpression.call(this);
}
BgImageExpression.prototype = Object.create(StyleExpression.prototype);

BgImageExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	this._updateContext("backgroundImage", "backgroundImage");
	var value = this._getExpression("backgroundImage");
	this._setContextValue("backgroundImage", "url(" + value + ")");
};