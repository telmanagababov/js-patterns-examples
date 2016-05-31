function Bird() {
  Handler.call(this, '#bird');
}
Bird.prototype = Object.create(Handler.prototype);

Bird.prototype.handleRequest = function(request) {
  var self = this;
  Handler.prototype._taste.apply(this, [request.type, function() {
    if(request.type === Food.WORM) {
      Handler.prototype._eat.call(self, request);
    } else if (self._successor) {
      self._successor.handleRequest(request);
    }
  }]);
};