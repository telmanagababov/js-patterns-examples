var WorkersPool = (function() {
    var instance = null;
    
    function WorkersPool() {
        this._freeWorkers = [];
        this._busyWorkers = [];
        
        this.acquireWorker = function() {
            var worker = null;
            if(this._freeWorkers.length > 0) {
                worker = this._freeWorkers.pop();
            } else {
                var workerId = this.getCreatedWorkersAmount() + 1;
                worker = new Worker(workerId);
            }
            this._busyWorkers.push(worker);
            Info.getInstance().update(this._freeWorkers.length, this._busyWorkers.length);
            return worker;
        };
        
        this.releaseWorker = function(worker) {
            var worker = this._busyWorkers.splice(this._busyWorkers.indexOf(worker), 1)[0];
            this._freeWorkers.push(worker);
            Info.getInstance().update(this._freeWorkers.length, this._busyWorkers.length);
        }
        
        this.getCreatedWorkersAmount = function() {
            return this._freeWorkers.length + this._busyWorkers.length;
        }
    }
    
    return {
        getInstance: function () {
            if(instance === null) {
                instance = new WorkersPool();
            }
            return instance;
        }
    }
})();