function Picker(selector) {
	var self = this,
		picker = document.querySelector(selector);

	picker.onchange = function(event) {
		self.onOption(event.target.value);
	};
	
	this.onOption = function(type){};
}