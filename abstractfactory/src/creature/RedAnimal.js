function RedAnimal() {
    AbstractAnimal.call(this);
    this._entity.classList.add("redAnimal");
}
RedAnimal.prototype = Object.create(AbstractAnimal.prototype);

RedAnimal.prototype.hide = function() {
    this._entity.style.animation = "hide 2.5s linear infinite";
};