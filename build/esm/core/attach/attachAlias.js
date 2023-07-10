import { keyOfType } from "../keyOfType.js";
const dbAlias = {
    loadingStyle: "loading",
    dataText: "data",
    startValue: "start",
    attrLabel: "label",
    attrWidth: "width",
    attrHeight: "height",
};
export const attachAlias = (key, elem, attr) => {
    let changed = false;
    if (attr && typeof attr !== "undefined") {
        if (key in dbAlias) {
            let a = keyOfType(key, attr);
            let b = keyOfType(key, dbAlias);
            if (typeof attr[a] !== "undefined") {
                elem.setAttribute(dbAlias[b], attr[a].toString());
                // delete attr[a];
                changed = true;
            }
            return { attr, elem, changed };
        }
    }
    return { attr, elem, changed };
};
