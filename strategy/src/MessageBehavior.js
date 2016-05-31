function MessageBehavior() {
}
MessageBehavior.prototype = {
  renderInfo: function(selectorInfo) {
    selectorInfo.classList.remove("info-red", "info-expanded", "info-animated", "info-underlined", "info-neutral", "info-highlighted", "info-bold");
  }
}