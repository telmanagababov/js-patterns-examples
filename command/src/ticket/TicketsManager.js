function TicketsManager(selector) { /*RECEIVER*/
	var TICKETS_AMOUNT = 15,
		ASCEND_SORT = "ascend",
		DESCEND_SORT = "descend",
		RANDOM_SORT = "random";
	var ticketsPanel = document.querySelector(selector),
		tickets = [];

	for (var i = 0; i < TICKETS_AMOUNT; i++) {
		tickets.push(new TicketView(i + 1));
	}
	render();

	this.selectTickets = function(value) {
		for(var i = 0, len = tickets.length; i < len; i++) {
			if(i < value) {
				tickets[i].select();
			} else {
				tickets[i].unselect();
			}
		}
	};

	this.unselectTickets = function () {
		this.selectTickets(0);
	};

	this.sort = function(type) {
		var sortMethod = function(a, b){};
		switch(type) {
			case ASCEND_SORT:
				sortMethod = function (a, b) {return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;};
				break;
			case DESCEND_SORT:
				sortMethod = function (a, b) {return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;};
				break;
			case RANDOM_SORT:
				sortMethod = function (a, b) {return Math.random() > 0.5 ? 1 : -1;};
				break;
		}
		tickets.sort(sortMethod);
		render();
	};

	this.unsort = function () {
		this.sort(ASCEND_SORT);
	};

	function render() {
		ticketsPanel.innerHTML = "";
		for(var i = 0, len = tickets.length; i < len; i++) {
			ticketsPanel.appendChild(tickets[i].getView());
		}
	}
}