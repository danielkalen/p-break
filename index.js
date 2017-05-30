'use strict';

class EndBreakError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

module.exports = function (val) {
	throw new EndBreakError(val);
};

module.exports.end = function (err) {
	if (err instanceof EndBreakError)
		return err.value;
	
	throw err;
};
