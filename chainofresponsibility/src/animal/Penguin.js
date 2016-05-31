function Penguin() {
  Handler.call(this, '#penguin');
}
Penguin.prototype = Object.create(Handler.prototype);

Penguin.prototype.handleRequest = function(request) {
  var self = this;
  Handler.prototype._taste.apply(this, [request.type, function() {
    if(request.type === Food.FISH) {
      Handler.prototype._eat.call(self, request);
    } else if (self._successor) {
      self._successor.handleRequest(request);
    }
  }]);
};
