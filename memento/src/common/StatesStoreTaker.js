function StatesCareTaker() {
  var states = [],
      currentStateId = 0;
  
  this.addState = function(state) {
    states.push(state);
    currentStateId = states.length - 1;
  }
  
  this.getState = function() {
    return states[currentStateId];
  };
  
  this.getPrevState = function() {
    currentStateId--;
    return states[currentStateId];
  };
  
  this.getNextState = function() {
    currentStateId++;
    return states[currentStateId];
  };
  
  this.getStatesAmount = function() {
    return states.length;
  };
  
  this.getCurrentStateId = function() {
    return currentStateId;
  };
  
  this.stringify = function() {
    return JSON.stringify(states);
  };
  
  this.parse = function(data) {
    states = JSON.parse(data);
  };
}