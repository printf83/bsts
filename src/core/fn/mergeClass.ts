// export const mergeClass = (
// 	existingClass: string | string[] | null | undefined,
// 	newClass: string | string[] | null | undefined
// ): string | string[] | null => {
// 	if (existingClass) {
// 		if (newClass) {
// 			if (Array.isArray(existingClass)) {
// 				if (Array.isArray(newClass)) {
// 					return [...existingClass, ...newClass];
// 				} else {
// 					return [...existingClass, newClass];
// 				}
// 			} else {
// 				if (Array.isArray(newClass)) {
// 					return [existingClass, ...newClass];
// 				} else {
// 					return [existingClass, newClass];
// 				}
// 			}
// 		} else {
// 			return existingClass;
// 		}
// 	} else {
// 		if (newClass) {
// 			return newClass;
// 		} else {
// 			return null;
// 		}
// 	}
// };

const string2Array = (d: string | string[] | undefined) => {
	let result: string[] | undefined;
	if (typeof d === "string") {
		result = d.split(" ");
	} else {
		result = d;
	}

	return result;
};

export const mergeClass = (target: string | string[] | undefined, source: string | string[] | undefined): string[] => {
	target = string2Array(target);
	source = string2Array(source);

	let result: string[] = [];

	if (target) {
		if (source) {
			result = [...target, ...source].filter(Boolean);
		} else {
			result = target.filter(Boolean);
		}
	} else {
		if (source) {
			result = source.filter(Boolean);
		}
	}

	return result.filter((value, index) => result.indexOf(value) === index);
};
