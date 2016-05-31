function TypeWidget(selector) {
    Observer.call(this);
    this._content = selector.querySelector(".content");
}
TypeWidget.prototype = Object.create(Observer.prototype);

TypeWidget.prototype.update = function(state) {
    this._content.innerText = state.type;
};