
// export const mergeStyle = (target: object, source: object) => {
// 	if (existingStyle) {
// 		if (newStyle) {
// 			let res = {};
// 			Object.keys(existingStyle).forEach((i) => {
// 				if (newStyle.hasOwnProperty(i)) {
// 					res[i] = newStyle[i];
// 				} else {
// 					res[i] = existingStyle[i];
// 				}
// 			});
// 			Object.keys(newStyle).forEach((i) => {
// 				if (!existingStyle.hasOwnProperty(i)) {
// 					if (newStyle[i] !== null && newStyle[i] !== undefined) {
// 						res[i] = newStyle[i];
// 					}
// 				}
// 			});
// 			return res;
// 		} else {
// 			return existingStyle;
// 		}
// 	} else {
// 		if (newStyle) {
// 			return newStyle;
// 		} else {
// 			return null;
// 		}
// 	}

// };

export const mergeStyle = (target: object, source: object): object => {
	return Object.assign({}, target, source);
};
