window.onload = function() {

	var gameMediator = new GameMediator(),
		ticketsManager = new TicketsPanelComponent(),
		sliderPanel = new SliderPanelComponent();
	
	gameMediator.registerTicketsPanel(ticketsManager);
	gameMediator.registerSliderPanel(sliderPanel);
	
};