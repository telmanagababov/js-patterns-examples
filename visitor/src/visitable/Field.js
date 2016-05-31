function Field(container) {
  Figure.call(this, container);
  this.render('field');
  this._elements = [];
}
Field.prototype = Object.create(Figure.prototype);

Field.prototype.addElement = function(element) {
  this._elements.push(element);
};

Field.prototype.accept = function(visitor) {
  this._elements.forEach(function(element) {
    element.accept(visitor);
  });
  Figure.prototype.accept.call(this,  visitor);
};