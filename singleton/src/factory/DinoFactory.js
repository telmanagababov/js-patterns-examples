var DinoFactory = (function() {
    var instance = null;
    
    function DinoFactory() {
    }

    DinoFactory.prototype.createRandomDino = function() {
        var dinoType = this.getRandomDinoType();
        return this.createDino(dinoType);
    };

    DinoFactory.prototype.createDino = function(type) {
        return new DinoView(type);
    };

    DinoFactory.prototype.getRandomDinoType = function() {
        var type = "",
            randValue = Math.random();
        if(randValue < 0.2) {
            type = "dino-yellow";
        } else if(randValue < 0.4) {
            type = "dino-orange";
        } else if(randValue < 0.6) {
            type = "dino-red";
        } else if(randValue < 0.8) {
            type = "dino-blue";
        } else {
            type = "dino-green";
        }
        return type;
    };
    
    return {
        getInstance: function() {
            if(instance === null) {
                instance = new DinoFactory();
            }
            return instance;
        }
    };
})();