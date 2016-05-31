function CharWidget(selector) {
    Observer.call(this);
    this._content = selector.querySelector(".content");
}
CharWidget.prototype = Object.create(Observer.prototype);

CharWidget.prototype.update = function(state) {
    this._content.innerText = state.content;
};