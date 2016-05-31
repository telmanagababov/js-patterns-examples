function GreenBrickFactory () {
    
}
GreenBrickFactory.prototype = Object.create(BrickFactory.prototype);

GreenBrickFactory.prototype._createBrick = function (type) {
    var size = BrickSize.GREEN,
        content = this._createContent(BrickType.GREEN);
    return new GreenBrick(content, size);
};