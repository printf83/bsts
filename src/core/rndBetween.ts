let lastRndBetween: number;

export const rndBetween = (min: number, max: number) => {
	if (min === max) {
		return min;
	}

	if (max < min) {
		max = min + 1;
	}

	let result: number;
	do {
		result = Math.floor(Math.random() * (max - min + 1) + min);
	} while (result === lastRndBetween);

	lastRndBetween = result;
	return result;
};

// export const rndBetween = (min: number, max: number): number => {
// 	if (min === max) {
// 		return min;
// 	} else {
// 		if (max < min) {
// 			max = min + 1;
// 		}

// 		let result = Math.floor(Math.random() * (max - min + 1) + min);
// 		if (result !== lastRndBeetween) {
// 			lastRndBeetween = result;
// 			return result;
// 		} else {
// 			return rndBetween(min, max);
// 		}
// 	}
// };
