document.querySelector("#build-control").addEventListener("click", function() {
   var builder = new AnimationBuilder();
   builder.setType(document.querySelector("#type-select").value); 
   builder.setBorderSize(document.querySelector("#border-size-select").value); 
   builder.setBorderColor(document.querySelector("#border-color-select").value); 
   builder.setBorderType(document.querySelector("#border-type-select").value); 
   builder.setBackgroundColor(document.querySelector("#background-color-select").value); 
   builder.setText(document.querySelector("#text-select").value); 
   builder.setTextColor(document.querySelector("#text-color-select").value); 
   builder.setTextSize(document.querySelector("#text-size-select").value); 
   builder.setAnimation(document.querySelector("#animation-select").value); 
   document.querySelector("#result-field").appendChild(builder.getResult().getContent());
});