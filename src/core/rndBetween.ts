let lastRndBeetween = 0;

export const rndBetween = (min: number, max: number) => {
	if (min === max) {
		return min;
	} else {
		if (max < min) {
			max = min + 1;
		}

		let result = Math.floor(Math.random() * (max - min + 1) + min);
		if (result !== lastRndBeetween) {
			lastRndBeetween = result;
			return result;
		} else {
			return rndBetween(min, max);
		}
	}
};
