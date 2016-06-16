window.onload = function() {

	var gameMediator = new GameMediator();
	new TicketsPanelComponent(gameMediator);
	new SliderPanelComponent(gameMediator);
	
};