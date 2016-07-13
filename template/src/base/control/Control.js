function Control(selector) {
	var self = this,
		button = document.querySelector(selector);

	button.onclick = function() {
		self.onClick(selector);
	};

	this.setEnabled = function (value) {
		button.disabled = !value;
	};

	this.show = function () {
		button.classList.remove(ViewState.HIDDEN);
	};

	this.hide = function () {
		button.classList.add(ViewState.HIDDEN);
	};

	this.onClick = function(){};
}