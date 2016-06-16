function SliderPanelComponent(gameMediator) {
	BaseComponent.call(this, gameMediator);

	var SLIDER_PANEL_SELECTOR = "#slider-panel";
	var view = document.querySelector(SLIDER_PANEL_SELECTOR),
		slider = new Slider(SLIDER_PANEL_SELECTOR);

	slider.onPrev = function () {
		gameMediator.switchToPrevPage();
	};
	slider.onNext = function () {
		gameMediator.switchToNextPage();
	};
	
	this.show = function() {
		view.classList.remove(ViewState.HIDDEN);
	};
	
	this.hide = function() {
		view.classList.add(ViewState.HIDDEN);
	};
	
	this.setInfo = function (value) {
		slider.setInfo(value);
	};
	
	this.updateState = function (hasPrev, hasNext) {
		slider.updateState(hasPrev, hasNext);
	};

	gameMediator.registerSliderPanel(this);
}
SliderPanelComponent.prototype = Object.create(BaseComponent.prototype);