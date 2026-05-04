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
	const now = Date.now();
	const diffMs = datevalue - now;
	const isPast = diffMs < 0;
	const sec = Math.floor(Math.abs(diffMs) / 1000);

	const pluralize = (value: number, unit: string) => `${value} ${unit}${value > 1 ? "s" : ""}`;

	if (sec < 1) {
		return {
			next: isPast ? 1000 : diffMs === 0 ? 1000 : -2,
			msg: isPast ? "just now" : "ready",
		};
	}

	const ranges = [
		{ limit: 60, unit: "second", interval: 1000, divisor: 1 },
		{ limit: 3600, unit: "minute", interval: 60000, divisor: 60 },
		{ limit: 86400, unit: "hour", interval: 3600000, divisor: 3600 },
		{ limit: Infinity, unit: "day", interval: -1, divisor: 86400 },
	];

	const range = ranges.find((range) => sec < range.limit)!;
	const value = Math.floor(sec / range.divisor);
	const suffix = isPast ? " ago" : "";
	const msg = `${pluralize(value, range.unit)}${suffix}`;

	return {
		next: range.interval,
		msg,
	};
};
