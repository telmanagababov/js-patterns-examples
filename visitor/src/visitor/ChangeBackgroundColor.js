function ChangeBackgroundControl(container) {
  FigureOperation.call(this, container);
  this.render('Bg');
}
ChangeBackgroundControl.prototype = Object.create(FigureOperation.prototype);

ChangeBackgroundControl.prototype.visit = function(figure) {
  FigureOperation.prototype.visit.call(this, figure);
  var view = figure.getView();
  if(figure instanceof Circle) {
    view.style.backgroundColor = "#f00";
  } else if(figure instanceof Rectangle) {
    view.style.backgroundColor = "#0f0";
  } else {
    view.style.backgroundColor = this._getRandomColor();
  }
};