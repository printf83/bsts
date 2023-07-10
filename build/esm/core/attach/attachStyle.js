import { camel2Dash } from "../camel2Dash.js";
import { keyOfType } from "./../keyOfType.js";
export const attachStyle = (key, elem, attr) => {
    let changed = false;
    if (key === "style") {
        if (attr && typeof attr.style !== "undefined") {
            let i = Object.keys(attr.style);
            if (i && i.length > 0) {
                for (let x = 0; x < i.length; x++) {
                    let k = keyOfType(i[x], attr.style);
                    if (attr.style[k]) {
                        if (attr.style[k].indexOf(" !important") > -1) {
                            elem.style.setProperty(camel2Dash(i[x]), attr.style[k].replace(" !important", ""), "important");
                        }
                        else {
                            elem.style.setProperty(camel2Dash(i[x]), attr.style[k]);
                        }
                    }
                }
            }
            // delete attr.style;
            changed = true;
        }
    }
    return { attr, elem, changed };
};
