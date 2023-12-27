/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * If min equals max, returns min.
 * If max is less than min, sets max to min + 1.
 */
export const rndBetween = (min: number, max: number) => {
	if (min === max) {
		return min;
	}

	if (max < min) {
		max = min + 1;
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
};
