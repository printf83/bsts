import { keyOfType } from "./../keyOfType.js";
export const attachOther = (key, elem, attr) => {
    let changed = false;
    if (attr && typeof attr !== "undefined") {
        let k = keyOfType(key, attr);
        let i = Array.isArray(attr[k]) ? attr[k] : attr[k];
        elem.setAttribute(key, i.toString());
        // delete attr[k];
        changed = true;
    }
    return { attr, elem, changed };
};
