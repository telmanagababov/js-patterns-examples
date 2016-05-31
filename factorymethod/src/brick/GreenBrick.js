function GreenBrick(content, size) {
    this.content = content;
    this.size = size;
    this.type = "green";
}
GreenBrick.prototype = Object.create(Brick.prototype);