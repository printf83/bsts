import { shuffleArray } from "./shuffleArray.js";

const rdb: object = {};

export const randomDB = <T>(name:string, arr:T[]):T => {
	let arr_length = arr.length;

	if (!rdb[name]) {
		rdb[name] = {
			x: 0,
		};
	}

	if (rdb[name].x === 0) {
		if (rdb[name].i) {
			//have old value
			let last_i_value = rdb[name].i[arr_length - 1];

			//shuffle new db
			rdb[name].i = shuffleArray<T>(arr);

			//check if last value same with new value
			if (last_i_value === rdb[name].i[0]) {
				//swap first with end
				rdb[name].i[0] = rdb[name].i[arr_length - 1];
				rdb[name].i[arr_length - 1] = last_i_value;
			}
		} else {
			rdb[name].i = shuffleArray<T>(arr);
		}
	}

	if (rdb[name].x + 1 >= arr_length) {
		rdb[name].x = 0;
		return randomDB(name, arr);
	} else {
		rdb[name].x += 1;

		let x = rdb[name].x - 1;
		let i = rdb[name].i[x];
		let r = arr[i];
		return r;
	}
}