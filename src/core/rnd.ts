export function rnd(max:number, min:number=0):number {
    if (max < min) {
        max = min;
    }

	return Math.floor(Math.random() * (max - min + 1)) + min;
}