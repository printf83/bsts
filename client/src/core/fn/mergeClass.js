import { removeEmptyArray } from "./removeEmptyArray.js";
const string2Array = (d) => {
    let result;
    if (typeof d === "string") {
        result = d.split(" ");
    }
    else {
        result = d;
    }
    return result;
};
export const mergeClass = (target, source) => {
    target = string2Array(target);
    source = string2Array(source);
    let result = [];
    if (target) {
        if (source) {
            result = removeEmptyArray([...target, ...source]);
        }
        else {
            result = removeEmptyArray(target);
        }
    }
    else {
        if (source) {
            result = removeEmptyArray(source);
        }
    }
    return result.filter((value, index) => result.indexOf(value) === index);
};
