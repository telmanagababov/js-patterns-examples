function ColorWidget(selector) {
    Observer.call(this);
    this._content = selector.querySelector(".content");
}
ColorWidget.prototype = Object.create(Observer.prototype);

ColorWidget.prototype.update = function(state) {
    this._content.innerText = state.style.color;
};