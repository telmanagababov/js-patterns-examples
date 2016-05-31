function Handler(type) {
  this._successor = null;
  this._food = null;
  this._type = type;
  this._growth = 0.15;
  this._weight = 1;
  this._view = document.querySelector(type);
}

Handler.prototype.setSuccessor = function(successor) {
  this._successor = successor;
};

Handler.prototype.handleRequest = function(request) {
};

Handler.prototype._taste = function(foodType, eatCallback) {
  var foodToEat = document.createElement('div');
  foodToEat.className = 'foodType';
  foodToEat.id = foodType;
  foodToEat.style.position = 'absolute';
  foodToEat.style.top = (this._view.offsetTop + 15) + 'px';
  foodToEat.style.left = (this._view.offsetLeft - 40) + 'px';
  document.body.appendChild(foodToEat);
  setTimeout(function() { 
    foodToEat.remove(); 
    if(eatCallback !== undefined && eatCallback !== null) {
      eatCallback(foodType);
    }
  }, 500);
};

Handler.prototype._eat = function(foodType) {
  this._weight += this._growth;
  this._view.style.transform = 'scale(' + this._weight + ',' + this._weight + ')';
  this._view.style.zIndex++;
};