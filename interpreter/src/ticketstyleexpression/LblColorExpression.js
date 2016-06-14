function LblColorExpression() {
	StyleExpression.call(this);
}
LblColorExpression.prototype = Object.create(StyleExpression.prototype);

LblColorExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	this._updateContext("labelColor", "color");
};