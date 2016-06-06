var TICKETS_PANEL_ID = "tickets-panel",
    HISTORY_PANEL_ID = "history-panel",
    CONFIG_PANEL_ID = "config-panel";
var ticketsPanel = new TicketsManager(TICKETS_PANEL_ID),
    statesCareTaker = new StatesCareTaker(),
    historyPanel = new HistoryPanel(HISTORY_PANEL_ID),
    configPanel = new ConfigPanel(CONFIG_PANEL_ID);

statesCareTaker.addState(ticketsPanel.getState());

ticketsPanel.onChanged = function() {
  statesCareTaker.addState(ticketsPanel.getState());
  updateHistoryPanel();
};

historyPanel.onPrev = function() {
  ticketsPanel.setState(statesCareTaker.getPrevState());
  updateHistoryPanel();
};

historyPanel.onNext = function() {
  ticketsPanel.setState(statesCareTaker.getNextState());
  updateHistoryPanel();
};

configPanel.onConfig = function() {
  var data = statesCareTaker.stringify();
  configPanel.setConfig(data);
};

configPanel.onOk = function(data) {
  statesCareTaker.parse(data);
  ticketsPanel.setState(statesCareTaker.getState());
  updateHistoryPanel();
};

function updateHistoryPanel() {
  var currentState = statesCareTaker.getCurrentStateId(),
      historyLength = statesCareTaker.getStatesAmount();
  historyPanel.setPrevEnabled(currentState > 0);
  historyPanel.setNextEnabled(currentState < historyLength - 1);
}