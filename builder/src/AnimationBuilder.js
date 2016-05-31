function AnimationBuilder() {
    this._animation = new AnimationView();
    
    this.setType = function(type) { 
        this._animation.setType(type);
    }; 
    this.setBorderSize = function(size) {
        this._animation.setBorderSize(size);
    };
    this.setBorderColor = function(color) {
        this._animation.setBorderColor(color);
    };
    this.setBorderType = function(type) {
        this._animation.setBorderType(type);
    };
    this.setBackgroundColor = function(color) {
        this._animation.setBackgroundColor(color);
    }; 
    this.setText = function(text) {
        this._animation.setText(text);
    };
    this.setTextColor = function(color) {
        this._animation.setTextColor(color);
    };
    this.setTextSize = function(size) {
        this._animation.setTextSize(size);
    };
    this.setAnimation = function(type) {
        this._animation.setAnimation(type);
    };
    this.getResult = function() {
        return this._animation;
    };
}