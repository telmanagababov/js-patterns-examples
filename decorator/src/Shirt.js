var SHIRT_ELEMENT_TYPE = "div",
    SHIRT_CLASS_NAME = "shirt";

function Shirt() {
    this._content = null;
}
Shirt.prototype = Object.create(Clothes.prototype, {
    render: { value: function() {
        this._content = document.createElement(SHIRT_ELEMENT_TYPE);
        this._content.classList.add(SHIRT_CLASS_NAME);
    }},
    getContent: { value: function() {
        return this._content;
    }}
});