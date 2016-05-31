function GreenPerson() {
    AbstractPerson.call(this);
    this._entity.classList.add("greenPerson");
}
GreenPerson.prototype = Object.create(AbstractPerson.prototype);

GreenPerson.prototype.move = function() {
    this._entity.style.animation = "move 10s linear infinite";
};