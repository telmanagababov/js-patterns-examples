function RedBrick(content, size) {
    this.content = content;
    this.size = size;
    this.type = "red";
}
RedBrick.prototype = Object.create(Brick.prototype);