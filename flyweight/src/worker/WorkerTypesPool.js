var WorkerTypesPool = (function() {
	var instance = null;

	function WorkersPool() {
		this._workers = {};

		this.create = function(type) {
			if(this._workers[type] === undefined) {
				this._workers[type] = new WorkerType(type);
			}
			this._updateInfo();
			return this._workers[type];
		};

		this._updateInfo = function() {
			var total = Object.keys(this._workers).length;
			Info.getInstance().updateTotal(total);
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