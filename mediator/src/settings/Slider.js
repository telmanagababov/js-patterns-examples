function Slider(selector) {
	var PREV_BUTTON_SELECTOR = "#prev-button",
		NEXT_BUTTON_SELECTOR = "#next-button",
		CURRENT_PAGE_SELECTOR = "#current-page-info";
	var self = this,
		prevButton = new Control(PREV_BUTTON_SELECTOR),
		nextButton = new Control(NEXT_BUTTON_SELECTOR),
		currentPageInfo = document.querySelector(CURRENT_PAGE_SELECTOR);

	prevButton.onClick = function() {
		self.onPrev();
	};
	nextButton.onClick = function() {
		self.onNext();
	};
	
	this.setInfo = function (value) {
		currentPageInfo.innerText = value;
	};
	this.updateState = function (hasPrev, hasNext) {
		prevButton.setEnabled(hasPrev);
		nextButton.setEnabled(hasNext);
	};
	
	this.onPrev = function () {};
	this.onNext = function () {};
}