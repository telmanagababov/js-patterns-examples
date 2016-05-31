function ConfigPanel(selector) {
  var CONFIG_BUTTON_ID = "config-panel-button",
      CONFIG_AREA_ID = "config-area",
      CONFIG_AREA_INPUT_ID = "config-area-input",
      CONFIG_AREA_OK_ID = "config-area-ok",
      CONFIG_AREA_CANCEL_ID = "config-area-cancel";
  var self = this,
      configPanel = document.getElementById(selector),
      configButton = document.getElementById(CONFIG_BUTTON_ID),
      configArea = document.getElementById(CONFIG_AREA_ID),
      configAreaInput = document.getElementById(CONFIG_AREA_INPUT_ID),
      configAreaOk = document.getElementById(CONFIG_AREA_OK_ID),
      configAreaCancel = document.getElementById(CONFIG_AREA_CANCEL_ID);
  
  configButton.addEventListener("click", function(){
    configArea.classList.remove("hidden");
    self.onConfig();
  });
  configAreaOk.addEventListener("click", function(){
    configArea.classList.add("hidden");
    self.onOk(configAreaInput.value);
  });
  configAreaCancel.addEventListener("click", function(){
    configArea.classList.add("hidden");
  });
  
  self.onConfig = function() {};
  self.onOk = function() {};
  
  self.setConfig = function(data) {
    configAreaInput.value = data;
  };
}