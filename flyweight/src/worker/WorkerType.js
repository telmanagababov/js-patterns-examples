function WorkerType(type) {
	this.type = type.toUpperCase();
	this.color = getRandomColor();
	this.view = "<div class='worker-type' style='color:" + this.color + "'>" +
			"<span>[ " + this.type + " ]</span>" +
		"</div>";

	function getRandomColor() {
		return "rgb(" + getRandomChannel() + "," + getRandomChannel() + "," + getRandomChannel() + ")";
	}

	function getRandomChannel() {
		return Math.round(Math.random()*255);
	}
}