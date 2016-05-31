function Brick(content, size) {
    IBrick.call(this);
}
Brick.prototype = Object.create(IBrick.prototype);

Brick.prototype.setDurability = function(value) {
    this.content.style.opacity = value;
}