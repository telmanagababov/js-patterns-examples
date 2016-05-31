var HIGHLIGHTED_SHIRT_CLASS_NAME = "highlighted-shirt";

function HighlightedShirtDecorator(shirt) {
    ShirtDecorator.call(this, shirt);
}
HighlightedShirtDecorator.prototype = Object.create(ShirtDecorator.prototype, {
    render: { value: function() {
        ShirtDecorator.prototype.render.call(this);
        this._shirt.getContent().classList.add(HIGHLIGHTED_SHIRT_CLASS_NAME);
    }}
});