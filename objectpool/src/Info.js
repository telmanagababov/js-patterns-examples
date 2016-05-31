var Info = (function() {
    var instance = null;
    
    function Info() {
        this._totalInfo = document.querySelector("#total-workers-info");
        this._freeInfo = document.querySelector("#free-workers-info");
        this._busyInfo = document.querySelector("#busy-workers-info");
        
        this.update = function(freeWorkers, busyWorkers) {
            this._totalInfo.innerHTML = "total: " + (freeWorkers + busyWorkers);
            this._freeInfo.innerHTML = "free: " + freeWorkers;
            this._busyInfo.innerHTML = "busy: " + busyWorkers;
        };
    }
    
    return {
        getInstance: function () {
            if(instance === null) {
                instance = new Info();
            }
            return instance;
        }
    }
})();