var LSIZED_SHIRT_CLASS_NAME = "lsized-shirt";

function LSizedShirtDecorator(shirt) {
    ShirtDecorator.call(this, shirt);
}
LSizedShirtDecorator.prototype = Object.create(ShirtDecorator.prototype, {
    render: { value: function() {
        ShirtDecorator.prototype.render.call(this);
        this._shirt.getContent().classList.add(LSIZED_SHIRT_CLASS_NAME);
    }}
});