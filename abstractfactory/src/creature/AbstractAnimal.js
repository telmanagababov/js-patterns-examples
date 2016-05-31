function AbstractAnimal() {
    var self = this;
    this._entity = document.createElement("div");
    this._entity.className = "animal";
    this._entity.style.top = 50 + Math.random() * 300 + "px";
    this._entity.style.left = 50 + Math.random() * 500 + "px";
    document.querySelector("#world").appendChild(this._entity);
    setTimeout(function() {
       self._entity.remove(); 
    }, 10000);
}

AbstractAnimal.prototype.hide = function() {
    console.error("AbsctractAnimal: hide");
};