/**
 * Calculates a relative timer message and next timer interval
 * based on the provided timestamp and the current time.
 *
 * Compares the provided timestamp to the current time to determine
 * if the timestamp is in the past, present, or future.
 *
 * For past timestamps, calculates the time difference to determine
 * the appropriate relative message (e.g. "5 minutes ago").
 *
 * For future timestamps, calculates the time difference to determine
 * the appropriate relative message (e.g. "5 minutes").
 *
 * Also calculates the next interval for a timer based on the time
 * difference.
 *
 * Returns an object with the relative message and next timer interval.
 */
export const calcTimer = (datevalue: number) => {
	let t1 = new Date().getTime();
	let t2 = datevalue;
	let next = -1;
	let msg = `just now`;

	if (t1 > t2) {
		let diff = t1 - t2;
		let sec = parseInt((diff / 1000).toString(), 10);

		if (sec < 1) {
			next = 1000;
			msg = `just now`;
		} else if (sec >= 1 && sec < 60) {
			//second
			next = 1000;
			msg = `${sec} second${sec > 1 ? "s" : ""} ago`;
		} else if (sec >= 60 && sec < 3600) {
			//minute
			next = 60000;
			let t = parseInt((sec / 60).toString(), 10);
			msg = `${t} minute${t > 1 ? "s" : ""} ago`;
		} else if (sec >= 3600 && sec < 86400) {
			//hour
			next = 3600000;
			let t = parseInt((sec / 3600).toString(), 10);
			msg = `${t} hour${t > 1 ? "s" : ""} ago`;
		} else {
			//do not on timer
			next = -1;
			let t = parseInt((sec / 86400).toString(), 10);
			msg = `${t} day${t > 1 ? "s" : ""} ago`;
		}
	} else if (t1 === t2) {
		next = 1000;
		msg = `just now`;
	} else {
		let diff = t2 - t1;
		let sec = parseInt((diff / 1000).toString(), 10);

		if (sec < 1) {
			next = -2;
			msg = `ready`;
		} else if (sec >= 1 && sec < 60) {
			//second
			next = 1000;
			msg = `${sec} second${sec > 1 ? "s" : ""}`;
		} else if (sec >= 60 && sec < 3600) {
			//minute
			next = 60000;
			let t = parseInt((sec / 60).toString(), 10);
			msg = `${t} minute${t > 1 ? "s" : ""}`;
		} else if (sec >= 3600 && sec < 86400) {
			//hour
			next = 3600000;
			let t = parseInt((sec / 3600).toString(), 10);
			msg = `${t} hour${t > 1 ? "s" : ""}`;
		} else {
			//do not on timer
			next = -1;
			let t = parseInt((sec / 86400).toString(), 10);
			msg = `${t} day${t > 1 ? "s" : ""}`;
		}
	}

	return {
		next: next,
		msg: msg,
	};
};
