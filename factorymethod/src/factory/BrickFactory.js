function BrickFactory () {
    
}
BrickFactory.prototype = Object.create(IBrickFactory.prototype);

BrickFactory.prototype.create = function() {
    var brick = this._createBrick();
    brick.setDurability(0.25 + Math.random() * 0.75);
    return brick;
};

BrickFactory.prototype._createBrick = function () {
    throw new Error("BrickFactory: createBrick has no default implementation")
};

BrickFactory.prototype._createContent = function (type) {
    var content = document.createElement("div");
    content.classList.add("brick");
    content.classList.add(type);
    return content;
};