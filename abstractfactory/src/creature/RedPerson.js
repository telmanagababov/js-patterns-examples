function RedPerson() {
    AbstractPerson.call(this);
    this._entity.classList.add("redPerson");
}
RedPerson.prototype = Object.create(AbstractPerson.prototype);

RedPerson.prototype.move = function() {
    this._entity.style.animation = "move 2.5s linear infinite";
};