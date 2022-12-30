// export function extend(out:object ):object {
// 	out = out || {};

// 	for (let i = 1; i < arguments.length; i++) {
// 		if (!arguments[i]) continue;

// 		for (let key in arguments[i]) {
// 			if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
// 		}
// 	}

// 	return out;
// }

export const extend = <T>(x: T, y: T=null): T => {
	if (x) {
		(y as object) = y || {};
		Object.keys(x).forEach((i) => {
			if (!y.hasOwnProperty(i) && x[i] !== null && x[i] !== undefined) {
				y[i] = x[i]
			}
		})
	}
	return y as T
}