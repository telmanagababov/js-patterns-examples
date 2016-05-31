function Observarble() {
    this._observers = [];
}

Observarble.prototype.attach = function(observer) {
    this._observers.push(observer);
};

Observarble.prototype.detach = function(observer) {
    this._observers.splice(this._observers.indexof(observer), 1);
};

Observarble.prototype.notify = function() {
    var self = this;
    this._observers.forEach(function(observer) {
        observer.update(self._getState());
    });
};

Observarble.prototype._getState = function() {
    throw new Error("_getState methond should be overriden");
};