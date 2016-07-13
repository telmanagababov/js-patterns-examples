function Selector(renderer) {
	var isOpened = false,
		onChange = function(){};
	init();
	
	function init() {
		renderer.render();
		close();
		renderer.getInput().getView().onclick = function () {
			toggle();
		};
		renderer.getValues().forEach(function(item) {
			item.getView().onclick = function() {
				renderer.getInput().getView().innerHTML = item.getView().innerHTML;
				close();
				onChange(item.getView().innerHTML);
			};
		}.bind(this));
		renderer.getInput().show();
	}
	
	function open() {
		isOpened = true;
		renderer.getValues().forEach(function(item) {
			item.show();
		});
	}
	
	function close() {
		isOpened = false;
		renderer.getValues().forEach(function(item) {
			item.hide();
		});
	}
	
	function toggle() {
		if(isOpened === true) {
			close();
		} else {
			open();
		}
	}

	
	return {
		addChangeCallback: function(callback) {
			onChange = callback;
		}
	}
}