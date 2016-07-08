function NullTicket() {
	this.show = function () {};
	this.hide = function () {};
	this.getView = function () {
		return "";
	};
	this.onToggleState = function() {};
}