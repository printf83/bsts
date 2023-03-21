import { keyOfType } from "./keyOfType.js";
export const extend = (target, source) => {
    if (target) {
        source = source || {};
        Object.keys(target).forEach((i) => {
            let k = keyOfType(i, target);
            if (!source.hasOwnProperty(i) && target[k] !== null && target[k] !== undefined) {
                source[k] = target[k];
            }
        });
    }
    return source;
};
