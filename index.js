'use strict';
module.exports = ms => {
	if (typeof ms !== 'number') {
		throw new TypeError('Expected a number');
	}

	const roundTowardsZero = ms > 0 ? Math.floor : Math.ceil;

	return {
		days: roundTowardsZero(ms / 864e5),
		hours: roundTowardsZero(ms / 36e5) % 24,
		minutes: roundTowardsZero(ms / 6e4) % 60,
		seconds: roundTowardsZero(ms / 1e3) % 60,
		milliseconds: roundTowardsZero(ms) % 1e3,
		microseconds: roundTowardsZero(ms * 1e3) % 1e3,
		nanoseconds: roundTowardsZero(ms * 1e6) % 1e3
	};
};
