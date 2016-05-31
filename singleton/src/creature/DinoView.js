function DinoView(type) {
    this._type = type;
    this._id = DinoInfo.getInstance().getDinosAmount();
    this._entity = this._createEntity();
}

DinoView.prototype.getEntity = function() {
    return this._entity;
}

DinoView.prototype._createEntity = function() {
    var entity = document.createElement("div");
    entity.classList.add("dino");
    entity.classList.add(this._type);
    entity.innerText = this._id;
    entity.style.top = 50 + Math.floor(Math.random() * 400) + "px";
    entity.style.left = 50 + Math.floor(Math.random() * 400) + "px";
    return entity;
}