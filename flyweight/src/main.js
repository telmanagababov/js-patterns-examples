var factories = [],
	factorySelectors = [
		".factory-green",
		".factory-red"
	];

factories = factorySelectors.map(function(selector) {
	return new Factory(document.querySelector(selector));
});

factories.forEach(function(factory) {
	factory.setOnclickHandler(function() {
		factory.addWorker();
	});
});