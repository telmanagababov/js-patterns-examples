function ErrorMessageBehavior() {
}
ErrorMessageBehavior.prototype = Object.create(MessageBehavior, {
  renderInfo: { value: function(selectorInfo) {
    MessageBehavior.prototype.renderInfo.call(this, selectorInfo);
    selectorInfo.classList.add("info-red", "info-expanded", "info-animated");
  }}
});