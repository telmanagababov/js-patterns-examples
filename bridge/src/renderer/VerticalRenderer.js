function VerticalRenderer(selector) {
	BaseRenderer.call(this, selector);
}
VerticalRenderer.prototype = Object.create(BaseRenderer.prototype);

VerticalRenderer.prototype._renderInput = function () {
	var view = document.createElement("div");
	view.classList.add("vertical-input");
	return {
		show: function () {
			view.style.display = "block";
		},
		hide: function () {
			view.style.display = "none";
		},
		getView: function () {
			return view;
		}
	}
};

VerticalRenderer.prototype._renderValues = function () {
	var options = Array.prototype.slice.call(this._select.querySelectorAll("option"));
	return options.map(function(item) {
		var view = document.createElement("div");
		view.classList.add("vertical-value");
		view.innerHTML = item.innerHTML;
		return {
			show: function () {
				view.style.display = "block";
			},
			hide: function () {
				view.style.display = "none";
			},
			getView: function () {
				return view;
			}
		}
	});
};