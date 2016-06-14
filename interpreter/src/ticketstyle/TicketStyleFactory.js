function TicketStyleFactory() {

	var expressions = [
		new BgImageExpression(),
		new BgOpacityExpression(),
		new BgShadeExpression(),
		new LblColorExpression(),
		new TicketSizeExpression()
	];

	this.parse = function (configuration) {
		var context = new Style(configuration);
		expressions.forEach(function (expression) {
			expression.interpret(context);
		});
		return context.output;
	}
}