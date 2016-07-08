function TutorialInfo(selector) {
	var view = document.querySelector(selector);
	
	this.show = function () {
		view.classList.remove(ViewState.HIDDEN);
	};

	this.hide = function () {
		view.classList.add(ViewState.HIDDEN);
	};
	
	this.getScrollPosition = function () {
		return view.scrollTop;
	};

	this.setScrollPosition = function (value) {
		view.scrollTop = value;
	};

	this.getMaxScrollPosition = function () {
		return view.scrollHeight;
	};
}