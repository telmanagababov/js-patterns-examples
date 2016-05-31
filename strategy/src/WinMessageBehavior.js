function WinMessageBehavior() {
}
WinMessageBehavior.prototype = Object.create(MessageBehavior, {
  renderInfo: { value: function(selectorInfo) {
    MessageBehavior.prototype.renderInfo.call(this, selectorInfo);
    selectorInfo.classList.add("info-bold", "info-highlighted");
  }}
});