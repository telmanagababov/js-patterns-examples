function ChangeBorderControl(container) {
  FigureOperation.call(this, container);
  this.render('Br');
}
ChangeBorderControl.prototype = Object.create(FigureOperation.prototype);

ChangeBorderControl.prototype.visit = function(figure) {
  FigureOperation.prototype.visit.call(this, figure);
  var view = figure.getView();
  if(figure instanceof Circle) {
    view.style.borderColor = "#c00";
  } else if(figure instanceof Rectangle) {
    view.style.borderColor = "#0c0";
  } else {
    view.style.borderColor = this._getRandomColor();
  }
};