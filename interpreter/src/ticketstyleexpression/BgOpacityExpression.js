function BgOpacityExpression() {
	StyleExpression.call(this);
}
BgOpacityExpression.prototype = Object.create(StyleExpression.prototype);

BgOpacityExpression.prototype.interpret = function (context) {
	StyleExpression.prototype.interpret.call(this, context);
	this._updateContext("backgroundOpacity", "opacity");
};