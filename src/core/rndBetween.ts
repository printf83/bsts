export const rndBetween = (min: number, max: number) => {
	if (min === max) {
		return min;
	}

	if (max < min) {
		max = min + 1;
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
};
