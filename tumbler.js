const work = {
	isDone: function () {
		return this.workLoad === 0;
	},
	execute: function () {
		this.workLoad--;
	},
	workLoad: 1_000,
};
const coffee = new Coffee();
while (!work.isDone()) {
	if (coffee.isEmpty()) {
		coffee.refill([sugar, cream]);
	}
	coffee.sip();
	work.execute();
}
