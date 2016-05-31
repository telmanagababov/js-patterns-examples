function Wolf() {
  Handler.call(this, '#wolf');
}
Wolf.prototype = Object.create(Handler.prototype);

Wolf.prototype.handleRequest = function(request) {
  var self = this;
  Handler.prototype._taste.apply(this, [request.type, function() {
    if(request.type === Food.MEAT) {
      Handler.prototype._eat.call(self, request);
    } else if (self._successor) {
      self._successor.handleRequest(request);
    }
  }]);
};