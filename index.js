'use strict';

class EndBreakError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

module.exports = function (val) {
	var err = new EndBreakError(val);
	if (!(err instanceof EndBreakError)) {
		err.__proto__ = EndBreakError.prototype;
	}
	throw err;
};

module.exports.end = function (err) {
	if (err instanceof EndBreakError) {
		return err.value;
	}

	throw err;
};
