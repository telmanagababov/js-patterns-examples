function TutorialInfoAdapter(tutorialInfo) {
	this._UPDATE_INTERVAL = 40;
	this._UPDATE_OFFSET = 2;
	this._tutorialInfo = tutorialInfo;
	this._playInterval = 0;
}
TutorialInfoAdapter.prototype = Object.create(ITutorial.prototype);

TutorialInfoAdapter.prototype.show = function () {
	this._tutorialInfo.show();
};
TutorialInfoAdapter.prototype.hide = function () {
	this._tutorialInfo.hide();
};
TutorialInfoAdapter.prototype.play = function () {
	var self = this;
	this._playInterval = setInterval(function() {
		var position = self._tutorialInfo.getScrollPosition() + self._UPDATE_OFFSET;
		self._tutorialInfo.setScrollPosition(position);
		if(position >= self._tutorialInfo.getMaxScrollPosition()) {
			clearInterval(self._playInterval);
		}
	}, this._UPDATE_INTERVAL);
};
TutorialInfoAdapter.prototype.pause = function () {
	clearInterval(this._playInterval);
};
TutorialInfoAdapter.prototype.reset = function () {
	this._tutorialInfo.setScrollPosition(0);
};