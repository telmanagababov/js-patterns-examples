function BlueBrick(content, size) {
    this.content = content;
    this.size = size;
    this.type = "blue";
}
BlueBrick.prototype = Object.create(Brick.prototype);