function Rectangle(container) {
  Figure.call(this, container);
  this.render('rectangle');
}
Rectangle.prototype = Object.create(Figure.prototype);