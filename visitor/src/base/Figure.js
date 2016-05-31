function Figure(container) {
  this._view = null;
  this._container = container;
}

Figure.prototype.accept = function(visitor) {
  visitor.visit(this);
};

Figure.prototype.getView = function() {
  return this._view;
};

Figure.prototype.render = function(className) {
  this._view = document.createElement('div');
  this._view.classList.add('figure');
  this._view.classList.add(className);
  this._container.appendChild(this._view); 
  this._view.ondragover = function(event) {
    event.preventDefault();
  };
  this._view.ondrop = function(event) {
    if(event.eventPhase === 2) {
      event.preventDefault();
      console.group('drop to: ', this);
      this.accept(window.currentControl);
      console.groupEnd();
    }
  }.bind(this);
};