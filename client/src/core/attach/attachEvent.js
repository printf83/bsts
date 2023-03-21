import { addEvent } from "../fn/eventManager.js";
export const attachEvent = (key, elem, attr) => {
    if (key === "on") {
        if (attr && typeof attr.on !== "undefined") {
            let prop = Object.keys(attr.on);
            if (prop) {
                for (let x = 0; x < prop.length; x++) {
                    if (typeof attr.on[prop[x]] === "function") {
                        addEvent(prop[x], elem, attr.on[prop[x]]);
                    }
                }
            }
            delete attr.on;
        }
    }
    return { attr, elem };
};
