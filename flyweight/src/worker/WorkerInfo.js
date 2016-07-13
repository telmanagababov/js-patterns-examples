function WorkerInfo(info) {
	this._content = document.createElement("div");
	this._content.innerHTML = info.view;
	this._content.classList.add("worker-info");

	this.setPosition = function(x, y) {
		this._content.style.left = x + "px";
		this._content.style.top = y + "px";
	};

	this.getContent = function() {
		return this._content;
	};
}