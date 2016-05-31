function RedBrickFactory () {
    
}
RedBrickFactory.prototype = Object.create(BrickFactory.prototype);

RedBrickFactory.prototype._createBrick = function (type) {
    var size = BrickSize.RED,
        content = this._createContent(BrickType.RED);
    return new RedBrick(content, size);
};