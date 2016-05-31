var DinoInfo = (function() {
    var instance = null;
    
    function DinoInfo() {
        this._info = document.querySelector("#info-panel");
        this._dinos = 0;
    }

    DinoInfo.prototype.addDino = function() {
        this._dinos++;
        this._update();
    };

    DinoInfo.prototype.getDinosAmount = function() {
        return this._dinos;
    };

    DinoInfo.prototype._update = function() {
        this._info.innerText = "dinos: " + this._dinos;
    };
    
    return {
        getInstance: function() {
            if(instance === null) {
                instance = new DinoInfo();
            }
            return instance;
        }
    };
})();