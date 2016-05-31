function OrangeBrickFactory () {
    
}
OrangeBrickFactory.prototype = Object.create(BrickFactory.prototype);

OrangeBrickFactory.prototype._createBrick = function (type) {
    var size = BrickSize.ORANGE,
        content = this._createContent(BrickType.ORANGE);
    return new OrangeBrick(content, size);
};