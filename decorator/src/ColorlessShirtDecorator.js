var COLORLESS_SHIRT_CLASS_NAME = "colorless-shirt";

function ColorlessShirtDecorator(shirt) {
    ShirtDecorator.call(this, shirt);
}
ColorlessShirtDecorator.prototype = Object.create(ShirtDecorator.prototype, {
    render: { value: function() {
        ShirtDecorator.prototype.render.call(this);
        this._shirt.getContent().classList.add(COLORLESS_SHIRT_CLASS_NAME);
    }}
});