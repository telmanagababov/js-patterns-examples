function ShirtDecorator(shirt) {
    this._shirt = shirt;
}
ShirtDecorator.prototype = Object.create(Clothes.prototype, {
    render: { value: function() {
        this._shirt.render();
    }},
    getContent: { value: function() {
        return this._shirt.getContent();
    }}
});