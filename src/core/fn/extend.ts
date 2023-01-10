import { keyOfType } from "./keyOfType";
export const extend = <T>(target: T, source?: T): T => {
	if (target) {
		source = source || ({} as T);
		Object.keys(target).forEach((i) => {
			let k = keyOfType(i, target);

			if (!source!.hasOwnProperty(i) && target[k] !== null && target[k] !== undefined) {
				source![k] = target[k];
			}
		});
	}
	return source as T;
};
