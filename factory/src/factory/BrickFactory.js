function BrickFactory () {
    
}

BrickFactory.prototype.create = function (type) {
    var brick = null,
        size = 0,
        content = null;
    switch(type) {
        case BrickType.RED:
            size = BrickSize.RED;
            content = this._createContent(type);
            brick = new RedBrick(content, size);
            break;
        case BrickType.GREEN:
            size = BrickSize.GREEN;
            content = this._createContent(type);
            brick = new GreenBrick(content, size);
            break;
        case BrickType.BLUE:
            size = BrickSize.BLUE;
            content = this._createContent(type);
            brick = new BlueBrick(content, size);
            break;
        case BrickType.ORANGE:
            size = BrickSize.ORANGE;
            content = this._createContent(type);
            brick = new OrangeBrick(content, size);
            break;
        default:
            throw Error("BrickFactory can't create a brick with type: ", type);
    }
    return brick;
};

BrickFactory.prototype._createContent = function (type) {
    var content = document.createElement("div");
    content.classList.add("brick");
    content.classList.add(type);
    return content;
};