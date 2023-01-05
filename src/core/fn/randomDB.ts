import { shuffleArray } from "./shuffleArray.js";

const _db = {};

export const randomDB = <T>(name: string, arr: T[]): T => {
	let arr_length = arr.length;

	if (!_db[name]) {
		_db[name] = {
			x: 0,
		};
	}

	if (_db[name].x === 0) {
		if (_db[name].i) {
			//have old value
			let last_i_value = _db[name].i[arr_length - 1];

			//shuffle new db
			_db[name].i = shuffleArray<T>(arr);

			//check if last value same with new value
			if (last_i_value === _db[name].i[0]) {
				//swap first with end
				_db[name].i[0] = _db[name].i[arr_length - 1];
				_db[name].i[arr_length - 1] = last_i_value;
			}
		} else {
			_db[name].i = shuffleArray<T>(arr);
		}
	}

	if (_db[name].x + 1 >= arr_length) {
		_db[name].x = 0;
		return randomDB(name, arr);
	} else {
		_db[name].x += 1;

		let x = _db[name].x - 1;
		let i = _db[name].i[x];
		let r = arr[i];
		return r;
	}
};
