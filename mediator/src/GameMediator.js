function GameMediator() {
	
	var ticketsPanel = null,
		sliderPanel = null;
	
	this.registerTicketsPanel = function (component) {
		ticketsPanel = component;
		checkForReady();
	};
	
	this.registerSliderPanel = function (component) {
		sliderPanel = component;
		checkForReady();
	};
	
	this.switchToPrevPage = function () {
		ticketsPanel.setPage(ticketsPanel.getCurrentPage() - 1);
		updateSliderState();
	};
	
	this.switchToNextPage = function () {
		ticketsPanel.setPage(ticketsPanel.getCurrentPage() + 1);
		updateSliderState();
	};
	
	function checkForReady() {
		if(ticketsPanel && sliderPanel) {
			updateSliderState();
		}
	}
	
	function updateSliderState() {
		sliderPanel.setInfo(ticketsPanel.getCurrentPage());
		sliderPanel.updateState(!ticketsPanel.isFirstPage(), !ticketsPanel.isLastPage());
	}
}
GameMediator.prototype = Object.create(BaseMediator.prototype);