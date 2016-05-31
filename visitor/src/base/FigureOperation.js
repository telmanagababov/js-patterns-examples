function FigureOperation(container) {
  this._container = container;
  this._view = null;
}

FigureOperation.prototype.visit = function(figure) {
  console.log(this._view.innerText + ': visit: ', figure);
};

FigureOperation.prototype.render = function(label) {
  this._view = document.createElement('div');
  this._view.classList.add('control');
  this._view.innerText = label;
  this._container.appendChild(this._view);
  this._view.draggable = true;
  this._view.ondragstart = function(event) {
    window.currentControl = this;
  }.bind(this);
};

FigureOperation.prototype._getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};