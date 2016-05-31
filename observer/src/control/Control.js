function Control(selector) {
    Observarble.call(this);
    this._selector = selector;
    this._addListeners();
}
Control.prototype = Object.create(Observarble.prototype);

Control.prototype._addListeners = function() {
    this._selector.addEventListener("mouseover", this.notify.bind(this));
};

Control.prototype._getState = function() {
    return {
        type: this._selector.id,
        content: this._selector.innerText,
        style: window.getComputedStyle(this._selector)
    }
};