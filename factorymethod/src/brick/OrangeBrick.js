function OrangeBrick(content, size) {
    this.content = content;
    this.size = size;
    this.type = "orange";
}
OrangeBrick.prototype = Object.create(Brick.prototype);