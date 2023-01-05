export const rnd = (max: number, min: number = 0): number => {
	max = max < min ? min : max;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
