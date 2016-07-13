var Info = (function() {
	var instance = null;

	function Info() {
		this._totalInfo = document.querySelector("#total-workers-info");
		this._typeInfo = document.querySelector("#type-workers-info input");

		this.updateTotal = function(total) {
			this._totalInfo.innerHTML = "total: " + total;
		};

		this.getType = function () {
			return this._typeInfo.value;
		}
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