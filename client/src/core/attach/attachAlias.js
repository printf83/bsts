import { keyOfType } from "../fn/keyOfType.js";
const dbAlias = {
    placeholderText: "placeholder",
    attrLabel: "label",
    dataText: "data",
    startValue: "start",
};
export const attachAlias = (key, elem, attr) => {
    if (attr && typeof attr !== "undefined") {
        if (key in dbAlias) {
            let a = keyOfType(key, attr);
            let b = keyOfType(key, dbAlias);
            if (typeof attr[a] !== "undefined") {
                elem.setAttribute(dbAlias[b], attr[a].toString());
                delete attr[a];
            }
            return { attr, elem };
        }
    }
    return { attr, elem };
};
