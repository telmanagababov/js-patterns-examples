function Circle(container) {
  Figure.call(this, container);
  this.render('circle');
}
Circle.prototype = Object.create(Figure.prototype);