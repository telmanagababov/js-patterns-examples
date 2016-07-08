function TutorialFactory() {
	
}

TutorialFactory.INFO_SELECTOR = "#info-tutorial";
TutorialFactory.VIDEO_SELECTOR = "#video-tutorial";

TutorialFactory.getTutorial = function () {
	var tutorial = null;
	if(TutorialFactory.isTabletMode()) {
		var infoTutorial = new TutorialInfo(TutorialFactory.INFO_SELECTOR);
		tutorial = new TutorialInfoAdapter(infoTutorial);
	} else {
		tutorial = new TutorialVideo(TutorialFactory.VIDEO_SELECTOR);
	}
	return tutorial;
};

TutorialFactory.isTabletMode = function () {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) !== null;
};
