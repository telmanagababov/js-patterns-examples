function AnimationView() {
    this._content = document.createElement("div");
    this._content.className = "animationInstance";
    
    this.setType = function(type) { 
        if(type === "circle") {
            this._content.style.borderRadius = "50%";
        }
    }; 
    this.setBorderSize = function(size) {
        this._content.style.borderWidth = size;
    };
    this.setBorderColor = function(color) {
        this._content.style.borderColor = color;
    };
    this.setBorderType = function(type) {
        this._content.style.borderStyle = type;
    };    
    this.setBackgroundColor = function(color) {
        this._content.style.backgroundColor = color;
    };     
    this.setText = function(text) {
        this._content.innerText = text;
    };    
    this.setTextColor = function(color) {
        this._content.style.color = color;
    };    
    this.setTextSize = function(size) {
        this._content.style.fontSize = size;
    };    
    this.setAnimation = function(type) {
        this._content.style.animationName = type;
    };    
    this.getContent = function() {
        return this._content;
    };
}