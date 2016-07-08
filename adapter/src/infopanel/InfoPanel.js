function InfoPanel() {

	var tutorial = TutorialFactory.getTutorial();

	this.openTutorial = function () {
		tutorial.show();
	};

	this.closeTutorial = function () {
		tutorial.hide();
	};

	this.playTutorial = function () {
		tutorial.play();
	};

	this.pauseTutorial = function () {
		tutorial.pause();
	};

	this.resetTutorial = function () {
		tutorial.reset();
	};
}