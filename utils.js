function promiseSequence(array, fn, data) {
	if (array === undefined || array === null) {
		return Promise.resolve(array);
	}
	if (!Array.isArray(array)) {
		array = [array];
	}
	if (typeof fn !== 'function') {
		return Promise.all(array);
	}
	return array.reduce((promise, el) => promise.then(d => fn(el, d)), Promise.resolve(data));
}

const pad2 = v => ('0'+v).slice(-2);

const timetag = (d = new Date()) => {
	let date = [d.getDate(), d.getMonth() + 1, d.getYear() % 100].map(pad2).join('/');
	let time = [d.getHours(), d.getMinutes(), d.getSeconds()].map(pad2).join(':');
	return '[' + date + ' ' + time + ']';
};

module.exports = {
	promiseSequence,
	timetag
};
