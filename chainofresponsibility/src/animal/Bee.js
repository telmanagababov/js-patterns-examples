function Bee() {
  Handler.call(this, '#bee');
}
Bee.prototype = Object.create(Handler.prototype);

Bee.prototype.handleRequest = function(request) {
  var self = this;
  Handler.prototype._taste.apply(this, [request.type, function() {
    if(request.type === Food.FLOWER) {
      Handler.prototype._eat.call(self, request);
    } else if (self._successor) {
      self._successor.handleRequest(request);
    }
  }]);
};