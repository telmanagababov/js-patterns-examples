function Worker(id) {
    this._content = document.createElement("div");
    this._content.className = "worker";
    this._content.innerText = id;
    
    this.setPosition = function(x, y) {
        this._content.style.left = x + "px"; 
        this._content.style.top = y + "px";
    };
    
    this.getContent = function() {
        return this._content;
    };
}