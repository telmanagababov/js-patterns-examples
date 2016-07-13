function HorizontalRenderer(selector) {
	BaseRenderer.call(this, selector);
}
HorizontalRenderer.prototype = Object.create(BaseRenderer.prototype);

HorizontalRenderer.prototype._renderInput = function () {
	var view = document.createElement("div");
	view.classList.add("horizontal-input");
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

HorizontalRenderer.prototype._renderValues = function () {
	var options = Array.prototype.slice.call(this._select.querySelectorAll("option"));
	return options.map(function(item) {
		var view = document.createElement("div");
		view.classList.add("horizontal-value");
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