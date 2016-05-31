function GreenAnimal() {
    AbstractAnimal.call(this);
    this._entity.classList.add("greenAnimal");
}
GreenAnimal.prototype = Object.create(AbstractAnimal.prototype);

GreenAnimal.prototype.hide = function() {
    this._entity.style.animation = "hide 10s linear infinite";
};