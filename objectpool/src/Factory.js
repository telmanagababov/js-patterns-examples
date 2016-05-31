function Factory(selector) {
    this._content = selector;
    this._workersPool = WorkersPool.getInstance();
    
    this.addWorker = function() {
       var self = this,
           worker = self._workersPool.acquireWorker();
       worker.setPosition(Math.ceil(Math.random() * 180), Math.ceil(Math.random() * 180));
       self._content.appendChild(worker.getContent());
       setTimeout(function() {
           self._content.removeChild(worker.getContent());
           self._workersPool.releaseWorker(worker);
       }, 3000) 
    };
    
    this.setOnclickHandler = function(callback) {
        this._content.onclick = callback;
    };
}