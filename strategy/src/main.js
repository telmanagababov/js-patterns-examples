
var MESSAGE_SELECTOR = "#message",
    TYPE_SELECTOR = "#type-select";

var messageDOM = document.querySelector(MESSAGE_SELECTOR),
    typeSelectDOM = document.querySelector(TYPE_SELECTOR);

var message = new Message(messageDOM, "Some default text with some number: 250.00");

updateMessageType();
typeSelectDOM.addEventListener("change", updateMessageType);

function updateMessageType() {
  var behaviorStrategy = null;
  switch(typeSelectDOM.value) {
    case "win":
      behaviorStrategy = new WinMessageBehavior();
      break;
    case "info":
      behaviorStrategy = new InfoMessageBehavior();
      break;
    case "warning":
      behaviorStrategy = new WarningMessageBehavior();
      break;
    case "error":
      behaviorStrategy = new ErrorMessageBehavior();
      break;
  }
  message.setBehavior(behaviorStrategy);
  message.render();
}