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

export const extend = <T>(target: T, source: T = null): T => {
	if (target) {
		(source as object) = source || {};
		Object.keys(target).forEach((i) => {
			if (!source.hasOwnProperty(i) && target[i] !== null && target[i] !== undefined) {
				source[i] = target[i];
			}
		});
	}
	return source as T;
};
