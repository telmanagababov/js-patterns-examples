function GameMediator() {
	
	var ticketsPanel = null,
		sliderPanel = null;
	
	this.registerTicketsPanel = function (component) {
		ticketsPanel = component;
	};
	
	this.registerSliderPanel = function (component) {
		sliderPanel = component;
	};
}