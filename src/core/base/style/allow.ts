import { db } from "./var.js";
import { camel2Dash } from "src/core/fn/camel2Dash.js";
import { dash2Camel } from "src/core/fn/dash2Camel.js";

let allowProp = [];

export const allow =(key:string):string|null=> {
	if (allowProp.length === 0) {
		let t = db;
		allowProp = [
			...t,
			...t
				.map((i) => {
					let j = camel2Dash(i);
					if (j !== i) {
						return j;
					}
				})
				.filter(Boolean),
		];
	}

	if (allowProp.indexOf(key) > -1) {
		let k = dash2Camel(key);
		if (k !== key) {
			return k;
		} else {
			return key;
		}
	}

	return null;
}