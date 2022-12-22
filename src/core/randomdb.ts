import { shufflearray } from "./shufflearray.js";

const rdb: object = {};

export const randomdb = <T>(name:string, db:T[]):T => {
	let db_length = db.length;

	if (!rdb[name]) {
		rdb[name] = {
			x: 0,
		};
	}

	if (rdb[name].x === 0) {
		if (rdb[name].i) {
			//have old value
			let last_i_value = rdb[name].i[db_length - 1];

			//shuffle new db
			rdb[name].i = shufflearray<T>(db);

			//check if last value same with new value
			if (last_i_value === rdb[name].i[0]) {
				//swap first with end
				rdb[name].i[0] = rdb[name].i[db_length - 1];
				rdb[name].i[db_length - 1] = last_i_value;
			}
		} else {
			rdb[name].i = shufflearray<T>(db);
		}
	}

	if (rdb[name].x + 1 >= db_length) {
		rdb[name].x = 0;
		return randomdb(name, db);
	} else {
		rdb[name].x += 1;

		let x = rdb[name].x - 1;
		let i = rdb[name].i[x];
		let r = db[i];
		return r;
	}
}