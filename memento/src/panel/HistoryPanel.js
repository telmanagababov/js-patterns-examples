function HistoryPanel(selector) {
  var PREV_BUTTON_ID = "history-panel-prev",
      NEXT_BUTTON_ID = "history-panel-next";
  var self = this,
      historyPanel = document.getElementById(selector),
      prevButton = document.getElementById(PREV_BUTTON_ID),
      nextButton = document.getElementById(NEXT_BUTTON_ID);
  
  prevButton.disabled = true;
  nextButton.disabled = true;
  prevButton.addEventListener("click", function(){self.onPrev()});
  nextButton.addEventListener("click", function(){self.onNext()});
  
  self.onPrev = function() {};
  self.onNext = function() {};
  
  self.setPrevEnabled = function(value) {
    prevButton.disabled = !value;
  };
  self.setNextEnabled = function(value) {
    nextButton.disabled = !value;
  };
}