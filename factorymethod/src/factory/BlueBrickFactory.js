function BlueBrickFactory () {
    
}
BlueBrickFactory.prototype = Object.create(BrickFactory.prototype);

BlueBrickFactory.prototype._createBrick = function () {
    var size = BrickSize.BLUE,
        content = this._createContent(BrickType.BLUE);
    return new BlueBrick(content, size);
};