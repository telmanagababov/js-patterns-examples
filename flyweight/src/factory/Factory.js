function Factory(selector) {
	this._content = selector;
	this._workerTypesPool = WorkerTypesPool.getInstance();
	this._info = Info.getInstance();

	this.addWorker = function() {
		var worker = this._getWorker();
		this._hireWorker(worker);
		// setTimeout(function() {
		// 	this._fireWorker(worker);
		// }.bind(this), 3000);
	};

	this._getWorker = function () {
		var workerType = this._workerTypesPool.create(this._info.getType()),
			worker = new WorkerInfo(workerType);
		worker.setPosition(Math.ceil(Math.random() * 150), Math.ceil(Math.random() * 150));
		return worker;
	};

	this._hireWorker = function (worker) {
		this._content.appendChild(worker.getContent());
	};

	this._fireWorker = function (worker) {
		this._content.removeChild(worker.getContent());
	};

	this.setOnclickHandler = function(callback) {
		this._content.onclick = callback;
	};
}