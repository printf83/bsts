import { shuffleArray } from "./shuffleArray.js";

export interface IRandomDB {
	[key: string]: { x: number; i: any[] | null };
}

const db: IRandomDB = {};

export const randomDB = <T>(name: string, arr: T[]): T => {
	let arrLength = arr.length;

	if (!db[name]) {
		db[name] = {
			x: 0,
			i: null,
		};
	}

	if (db[name].x === 0) {
		if (db[name].i) {
			//have old value
			let last_i_value = db[name].i![arrLength - 1];

			//shuffle new db
			db[name].i = shuffleArray<T>(arr);

			//check if last value same with new value
			if (last_i_value === db[name].i![0]) {
				//swap first with end
				db[name].i![0] = db[name].i![arrLength - 1];
				db[name].i![arrLength - 1] = last_i_value;
			}
		} else {
			db[name].i = shuffleArray<T>(arr);
		}
	}

	if (db[name].x + 1 >= arrLength) {
		db[name].x = 0;
		return randomDB(name, arr);
	} else {
		db[name].x += 1;

		let x = db[name].x - 1;
		let i = db[name].i![x];
		let r = arr[i];
		return r;
	}
};
