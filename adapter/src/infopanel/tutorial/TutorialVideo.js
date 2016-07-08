function TutorialVideo(selector) {
	this._view = document.querySelector(selector);
}
TutorialVideo.prototype = Object.create(ITutorial.prototype);

TutorialVideo.prototype.show = function () {
	this._view.classList.remove(ViewState.HIDDEN);
};
TutorialVideo.prototype.hide = function () {
	this._view.classList.add(ViewState.HIDDEN);
};
TutorialVideo.prototype.play = function () {
	this._view.play();
};
TutorialVideo.prototype.pause = function () {
	this._view.pause();
};
TutorialVideo.prototype.reset = function () {
	this._view.currentTime = 0;
};