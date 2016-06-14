function BgShadeExpression() {
	StyleExpression.call(this);
}
BgShadeExpression.prototype = Object.create(StyleExpression.prototype);

BgShadeExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	this._updateContext("backgroundShade", "backgroundColor");
};