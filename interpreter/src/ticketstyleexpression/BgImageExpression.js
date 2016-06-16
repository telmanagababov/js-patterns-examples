function BgImageExpression() {
	StyleExpression.call(this);
}
BgImageExpression.prototype = Object.create(StyleExpression.prototype);

BgImageExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	var value = this._getExpression("backgroundImage");
	this._setContextValue("backgroundImage", "url(" + value + ")");
};