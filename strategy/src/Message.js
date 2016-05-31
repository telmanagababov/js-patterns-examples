function Message(selector, text) {
  this._selector = selector;
  this._text = text;
  this._behavior = null;
  
  this.setBehavior = function(behavior) {
    this._behavior = behavior;
  };
  
  this.render = function() {
    var info = this._selector.querySelector("p");
    info.innerText = text;
    this._behavior.renderInfo(info);
  }
}